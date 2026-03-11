import style from "./SignFooter.module.css";

export default function SignFooter() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__div}>
        <p>© 2025 Зернятко. Всі права захищені.</p>
      </div>
    </footer>
    
  );
}