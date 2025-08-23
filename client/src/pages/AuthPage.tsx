import { useState } from 'react';

export default function AuthPage({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-eggcelent-yellow rounded-full mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-eggcelent-yellow">Eggcellent</h1>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-6 py-2 rounded-full text-sm font-medium ${isLogin ? 'bg-eggcelent-yellow text-white' : 'bg-white text-eggcelent-yellow'}`}
        >
          LOG IN
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-6 py-2 rounded-full text-sm font-medium ${!isLogin ? 'bg-eggcelent-yellow text-white' : 'bg-white text-eggcelent-yellow'}`}
        >
          SIGN UP
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Username or Email"
          className="w-full border rounded-full px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-full px-4 py-2"
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-full px-4 py-2"
          />
        )}
        <button
          type="submit"
          className="w-full bg-eggcelent-yellow text-white rounded-full py-2 mt-4"
        >
          {isLogin ? 'LOG IN' : 'SIGN UP'}
        </button>
      </form>
    </div>
  );
}
