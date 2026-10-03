import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPageShell, LegalSection } from "@/components/site/LegalPageShell";

export const Route = createFileRoute("/consent")({
  head: () => ({
    meta: [
      { title: "Согласие на обработку персональных данных — Triumph Auto Service" },
      {
        name: "description",
        content: "Текст согласия на обработку персональных данных при отправке заявки на сайте Triumph Auto Service.",
      },
    ],
  }),
  component: ConsentPage,
});

function ConsentPage() {
  return (
    <LegalPageShell title="Согласие на обработку персональных данных" eyebrow="Защита данных">
      <LegalSection title="Текст согласия">
        <p>
          Отправляя заявку через формы на сайте Triumph Auto Service, я подтверждаю, что ознакомлен(а) с{" "}
          <Link to="/privacy" className="text-gold hover:underline">
            Политикой обработки персональных данных
          </Link>{" "}
          и даю согласие Triumph Auto Service (Оператору) на обработку моих персональных данных на следующих условиях.
        </p>
      </LegalSection>

      <LegalSection title="Перечень данных">
        <LegalList items={["имя;", "номер телефона;", "содержание сообщения в заявке;", "технические данные, собираемые сайтом."]} />
      </LegalSection>

      <LegalSection title="Цели обработки">
        <LegalList
          items={[
            "обработка обращения и обратная связь;",
            "подготовка расчёта и консультация по услугам;",
            "заключение и исполнение договора;",
            "ведение клиентской истории обслуживания.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Действия с данными">
        <p>
          Согласие распространяется на сбор, систематизацию, хранение, уточнение, использование, передачу (в пределах,
          необходимых для оказания услуги) и удаление персональных данных.
        </p>
      </LegalSection>

      <LegalSection title="Срок действия согласия">
        <p>
          Согласие действует до достижения целей обработки или до его отзыва. Отзыв согласия возможен путём направления
          обращения на{" "}
          <a href="mailto:info@triumph-auto.by" className="text-gold hover:underline">
            info@triumph-auto.by
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Подтверждение">
        <p>
          Нажимая кнопку отправки заявки на сайте, вы подтверждаете, что текст согласия вам понятен и вы принимаете его
          условия добровольно.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
