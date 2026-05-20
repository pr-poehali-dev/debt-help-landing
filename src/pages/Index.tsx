import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    category: "О сроках, платежах и возможности изменений",
    icon: "Clock",
    items: [
      {
        q: "Можно ли изменить дату платежа?",
        a: "Да, это возможно. Обратитесь к нашим специалистам — мы учтём вашу ситуацию и предложим удобный вариант.",
      },
      {
        q: "Можно ли уменьшить сумму ежемесячного платежа?",
        a: "Да, при наличии уважительной причины и по согласованию с банком. Мы готовы рассмотреть индивидуальные условия.",
      },
      {
        q: "Почему заблокирована карта?",
        a: "При наличии просрочки автоматически блокируются все расходные операции — это стандартная мера, направленная на предотвращение роста задолженности.",
      },
      {
        q: "Когда карта снова станет доступна?",
        a: "Блокировка снимается в течение 24 часов после полного погашения просроченной задолженности.",
      },
      {
        q: "Я оплатил(а) сегодня — почему долг всё ещё отображается?",
        a: "Платеж обрабатывается в течение дня. После завершения обработки статус автоматически обновится.",
      },
    ],
  },
  {
    category: "О коммуникации и поддержке",
    icon: "MessageCircle",
    items: [
      {
        q: "Нужно ли приезжать в офис?",
        a: "Нет. Все вопросы можно решить онлайн — по телефону, в чате или через мобильное приложение.",
      },
      {
        q: "Как быстро ответят в чате?",
        a: "Ответит первый свободный оператор. Ваше обращение не останется без внимания.",
      },
    ],
  },
  {
    category: "О кредитной истории и последствиях",
    icon: "BarChart2",
    items: [
      {
        q: "Как просрочка повлияет на кредитную историю?",
        a: "Информация о просрочке передаётся в Бюро кредитных историй (БКИ). Однако своевременное погашение поможет минимизировать последствия.",
      },
      {
        q: "Сколько времени просрочка будет в БКИ?",
        a: "Информация хранится 10 лет, но её влияние со временем снижается — особенно если вы погасите долг и не допускаете новых просрочек.",
      },
      {
        q: "Могут ли отказать в новом кредите из-за одной просрочки?",
        a: "Возможно — это зависит от политики банка. Однако если вы объясните ситуацию и покажете, что проблема решена, шансы на одобрение остаются.",
      },
    ],
  },
  {
    category: "О способах оплаты и штрафах",
    icon: "CreditCard",
    items: [
      {
        q: "Можно ли оплатить через СБП или переводом?",
        a: "Да. Мы подскажем все доступные способы: СБП, переводы, оплата через приложения, кассы и другие каналы.",
      },
      {
        q: "Начисляются ли штрафы за просрочку?",
        a: "Все начисления осуществляются в соответствии с условиями вашего договора.",
      },
      {
        q: "Можно ли оплатить частями?",
        a: "Да — даже небольшие платежи лучше, чем отсутствие оплаты. Мы готовы обсудить вашу возможность.",
      },
      {
        q: "Может ли за меня оплатить другой человек?",
        a: "Да — главное, чтобы платеж был направлен на ваш счёт и корректно идентифицирован.",
      },
    ],
  },
  {
    category: "О доступе к карте и услугам",
    icon: "Smartphone",
    items: [
      {
        q: "Можно ли пополнить карту, если она заблокирована?",
        a: "Да — пополнение не является расходной операцией. После погашения долга блокировка снимется.",
      },
      {
        q: "Можно ли снять наличные при блокировке?",
        a: "Нет — снятие наличных относится к расходным операциям. Но вы можете пополнить карту или перевести средства другим способом.",
      },
    ],
  },
  {
    category: "О сроках и возможных отсрочках",
    icon: "CalendarClock",
    items: [
      {
        q: "Можно ли перенести платеж на более поздний срок?",
        a: "Да — при обращении в банк мы можем согласовать отсрочку или изменить дату платежа.",
      },
      {
        q: "Сколько времени даётся на погашение без штрафов?",
        a: "Обычно — 1–5 дней после даты платежа. Точный срок уточняйте у специалиста — он зависит от вашего договора.",
      },
      {
        q: "Что будет, если не погасить долг в течение 60 дней?",
        a: "Возможно направление досудебного уведомления. Однако мы продолжаем диалог — и можем предложить реструктуризацию или иные меры поддержки.",
      },
    ],
  },
  {
    category: "Советы и рекомендации",
    icon: "Lightbulb",
    items: [
      {
        q: "Что делать, если я потерял(а) работу?",
        a: "Свяжитесь с нами — мы поможем оформить отсрочку, реструктуризацию или подберём другое решение.",
      },
    ],
  },
];

const timelineSteps = [
  {
    label: "1 ДЕНЬ",
    icon: "AlertTriangle",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#F59E0B",
    items: [
      "Блокируются расходные операции по карте: оплата в магазинах, переводы, снятие наличных",
      "В течение 2 рабочих дней информация передаётся в Бюро кредитных историй (БКИ)",
    ],
  },
  {
    label: "2–60 ДНЕЙ",
    icon: "Phone",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#EA580C",
    items: [
      "Мы свяжемся с вами по телефону, SMS или в чат-боте в приложении MAX",
      "Не игнорируйте наши сообщения — свяжитесь сами, мы найдём решение именно для вас",
    ],
  },
  {
    label: "61 ДЕНЬ И БОЛЕЕ",
    icon: "FileText",
    color: "#E8201A",
    bg: "#FFF5F5",
    border: "#E8201A",
    items: [
      "Возможно направление досудебного уведомления",
      "Даже на этом этапе мы продолжаем диалог — наша цель не взыскание, а совместное решение",
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-colors ${open ? "bg-red-50" : "bg-white hover:bg-gray-50"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 focus:outline-none"
      >
        <span className="font-montserrat font-semibold text-[#1C1C1C] text-[14px] leading-snug">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: open ? "#E8201A" : "#F4F5F7",
            color: open ? "#fff" : "#6B7280",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Icon name="Plus" size={15} />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#6B7280] text-[13px] leading-relaxed font-opensans">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  return (
    <div className="font-opensans bg-white text-[#1C1C1C] min-h-screen">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E8201A] rounded flex items-center justify-center">
              <Icon name="Building2" size={19} className="text-white" />
            </div>
            <span className="font-montserrat font-extrabold text-[#1A2340] text-[18px] tracking-tight">БАНК</span>
          </div>
          <a
            href="tel:88001001545"
            className="flex items-center gap-2 text-[#E8201A] font-montserrat font-bold text-[14px] hover:text-[#C41510] transition-colors"
          >
            <Icon name="Phone" size={15} />
            8 800 100-15-45
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#F4F5F7] pt-14 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end gap-10">
            <div className="flex-1 pb-14">
              <h1 className="font-montserrat font-black text-[#1A2340] text-[44px] md:text-[54px] leading-[1.05] uppercase mb-6">
                ЧАСТО<br />ЗАДАВАЕМЫЕ<br />ВОПРОСЫ
              </h1>
            </div>
            <div className="flex-shrink-0 w-full md:w-[320px] self-end">
              <img
                src="https://cdn.poehali.dev/projects/fead63f3-37d2-467e-b72a-5f50f9c9352f/files/de9f86e0-71f0-40c7-86d6-664c7e3d657c.jpg"
                alt="Специалист банка"
                className="w-full h-[360px] object-cover object-top rounded-t-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section id="faq" className="py-16 bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E8201A] text-white text-[11px] font-montserrat font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
              <Icon name="HelpCircle" size={13} />
              FAQ
            </div>
            <h2 className="font-montserrat font-extrabold text-[#1A2340] text-[28px] md:text-[32px] mb-3">
              Часто задаваемые вопросы
            </h2>
            <p className="text-[#6B7280] text-[14px] max-w-xl mx-auto">
              Мы понимаем, что ситуации бывают разными — и готовы помочь вам найти решение. Если не нашли нужный ответ — свяжитесь с нами.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((group, gi) => (
              <div key={gi} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <Icon name={group.icon} size={17} className="text-[#E8201A]" fallback="HelpCircle" />
                  </div>
                  <h3 className="font-montserrat font-bold text-[#1A2340] text-[13px] uppercase tracking-wide">{group.category}</h3>
                </div>
                <div>
                  {group.items.map((item, ii) => (
                    <FaqItem key={ii} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 bg-[#1A2340]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-extrabold text-white text-[26px] md:text-[32px] mb-3">
              Не оставайтесь одни — мы здесь, чтобы помочь!
            </h2>
            <p className="text-white/50 text-[14px]">Выберите удобный способ связи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:88001001545"
              className="group bg-[#E8201A] hover:bg-[#C41510] rounded-xl px-7 py-7 flex items-center gap-5 transition-all duration-200 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={26} className="text-white" />
              </div>
              <div>
                <div className="text-white/70 text-[10px] font-montserrat font-bold uppercase tracking-widest mb-1">Горячая линия</div>
                <div className="text-white font-montserrat font-extrabold text-[20px]">8 800 100-15-45</div>
                <div className="text-white/60 text-[11px] mt-0.5">Бесплатно по России</div>
              </div>
            </a>

            <div className="bg-white/10 hover:bg-white/15 rounded-xl px-7 py-7 flex items-center gap-5 transition-all duration-200 cursor-pointer">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={26} className="text-white" />
              </div>
              <div>
                <div className="text-white/70 text-[10px] font-montserrat font-bold uppercase tracking-widest mb-1">Онлайн-чат</div>
                <div className="text-white font-montserrat font-extrabold text-[18px]">Написать в чат</div>
                <div className="text-white/60 text-[11px] mt-0.5">На сайте или в мобильном приложении</div>
              </div>
            </div>
          </div>

          <div className="mt-7 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-start gap-3">
            <Icon name="Shield" size={19} className="text-[#E8201A] mt-0.5 flex-shrink-0" />
            <p className="text-white/60 text-[13px] leading-relaxed">
              Наша цель — не взыскание, а поиск решения, которое подходит именно вам. Реструктуризация, отсрочка, изменение условий — мы рассмотрим любой вариант.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#E8201A] rounded flex items-center justify-center">
              <Icon name="Building2" size={13} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white text-[13px]">БАНК</span>
          </div>
          <p className="text-white/30 text-[11px] text-center">© 2026 Банк. Все права защищены. Лицензия ЦБ РФ</p>
          <a href="tel:88001001545" className="text-white/40 hover:text-white text-[11px] transition-colors">
            8 800 100-15-45
          </a>
        </div>
      </footer>
    </div>
  );
}