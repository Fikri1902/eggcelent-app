# LOKASI FILE: python-api/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
import pandas as pd
from meteostat import Point, Hourly  # <-- PENTING: Kita ganti Daily menjadi Hourly
import numpy as np # <-- Kita butuh numpy untuk menangani tipe data dari pandas

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

lokasi_surabaya = Point(-7.2575, 112.7521, 3)

# Peta kode cuaca ke teks
KODE_CUACA = {
    '1': 'Cerah', '2': 'Cerah Berawan', '3': 'Berawan', '4': 'Berawan Tebal',
    '5': 'Udara Kabur', '10': 'Asap', '45': 'Kabut', '60': 'Hujan Ringan',
    '61': 'Hujan Sedang', '63': 'Hujan Lebat', '80': 'Hujan Lokal',
    '95': 'Hujan Petir', '97': 'Hujan Petir'
}

@app.get("/api/weather")
def get_weather_from_meteostat():
    print(">>> Backend menerima permintaan, mengambil data PER JAM dari Meteostat...")

    try:
        # Mengambil data 24 jam terakhir untuk mendapatkan data terkini
        end = datetime.now()
        start = end - timedelta(hours=24)

        # PERUBAHAN UTAMA: Menggunakan Hourly, bukan Daily
        data = Hourly(lokasi_surabaya, start, end)
        data = data.fetch()

        if data.empty:
            raise HTTPException(status_code=404, detail="Data cuaca tidak tersedia dari Meteostat.")

        # Ambil data paling baru yang tidak kosong
        latest_data = data.dropna(subset=['temp', 'rhum', 'wspd', 'coco']).iloc[-1]

        # --- MEMPROSES DATA DENGAN BENAR ---
        # Mengubah tipe data numpy menjadi tipe data standar Python agar bisa dikirim via JSON
        suhu = float(latest_data['temp'])
        kelembapan = int(latest_data['rhum'])
        angin = float(latest_data['wspd'])
        kode_cuaca = str(int(latest_data['coco']))

        weather_info = {
            "lokasi": "Surabaya (Live dari Meteostat)",
            "suhu": suhu,
            "kelembapan": kelembapan,
            "angin": angin,
            "kondisi_teks": KODE_CUACA.get(kode_cuaca, "Cuaca Tidak Diketahui")
        }

        print(f">>> Data berhasil diambil dan diproses: {weather_info}")
        return weather_info

    except Exception as e:
        print(f"!!! Terjadi error: {e}")
        raise HTTPException(status_code=500, detail="Terjadi masalah internal saat memproses data cuaca.")