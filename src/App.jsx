import { useState } from 'react'
import './App.css'
import {ProfileCard} from './ProfileCard';

const profiles = [
  { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
  { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
  { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
  { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
  { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
];


function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevCount => {
      if (count >= 4) {
        return 0;
      }
      return prevCount + 1;
    });
  };
  return (
    <>
      <ProfileCard profile={profiles[count]} setProfile={setCount} />
      <button style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: 'transparent',
        width: '200px',
        margin: '0 auto',
        }} onClick={handleClick}>次のプロフィール</button>
    </>
  )
}

export default App
