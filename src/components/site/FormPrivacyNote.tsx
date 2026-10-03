import { Link } from "@tanstack/react-router";

export function FormPrivacyNote() {
  return (
    <p className="pt-1 text-center text-xs leading-relaxed text-navy-foreground/45">
      Нажимая кнопку, вы даёте{" "}
      <Link to="/consent" className="text-gold/90 underline-offset-2 hover:text-gold hover:underline">
        согласие на обработку персональных данных
      </Link>{" "}
      и подтверждаете ознакомление с{" "}
      <Link to="/privacy" className="text-gold/90 underline-offset-2 hover:text-gold hover:underline">
        политикой обработки ПДн
      </Link>
      .
    </p>
  );
}
