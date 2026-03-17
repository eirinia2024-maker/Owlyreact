import React from 'react';

export default function App() {
  const audience = [
    'Для детей, которые начинают учиться читать по-английски',
    'Для преподавателей английского языка',
    'Для родителей, которые хотят заниматься с ребёнком дома',
    'Для индивидуальных занятий, мини-групп и курсов',
  ];

  const features = [
    {
      title: 'Изучение букв и звуков',
      text: 'Постепенное знакомство с буквами английского алфавита и их звучанием.',
      note: 'Основа для уверенного чтения без угадывания.',
      icon: '🔤',
    },
    {
      title: 'Чтение слов, словосочетаний и предложений',
      text: 'Ребёнок учится соединять звуки и читать простые слова, а потом переходит к словосочетаниям и предложениям.',
      note: 'Формируется навык настоящего декодирования.',
      icon: '📖',
    },
    {
      title: 'Письмо и графика',
      text: 'Задания на написание букв и слов помогают лучше запомнить материал.',
      note: 'Чтение сразу поддерживается письмом.',
      icon: '✍️',
    },
    {
      title: 'Listening-задания',
      text: 'Ребёнок слушает и соотносит услышанное со словами и картинками.',
      note: 'Развивается связь между звучанием и чтением.',
      icon: '🎧',
    },
    {
      title: 'Работа со словами и словосочетаниями',
      text: 'Изучение лексики в доступном и наглядном формате.',
      note: 'Слова не просто читаются, а начинают использоваться в контексте.',
      icon: '🧩',
    },
    {
      title: 'Мини-комиксы и игровые задания',
      text: 'Яркие сюжеты, персонажи и увлекательные упражнения поддерживают интерес ребёнка.',
      note: 'Чтение становится осмысленным и мотивирующим.',
      icon: '💬',
    },
    {
      title: 'Постепенное усложнение материала',
      text: 'От букв и простых слов — к более уверенным навыкам чтения.',
      note: 'Материал выстроен логично и последовательно.',
      icon: '🌱',
    },
  ];

  const reasons = [
    'Основано на phonics-подходе: ребёнок учится читать, а не угадывать слова',
    'Включает не только чтение, но и письмо, восприятие на слух и работу с лексикой',
    'Подходит как для работе на уроке, так и для домашних занятий',
    'Яркий, современный и дружелюбный дизайн делает обучение приятным и истории понятными',
    'В пособии есть игровые элементы, комиксы и визуальная поддержка',
    'Материал выстроен последовательно и удобно для ребёнка',
  ];

  const bundleItems = [
    'Пособие',
    'Аудиоматериалы для listening-заданий',
    'Пакет скачиваемых дополнительных материалов (флешкарточки, прописи, раскраски, скрипты, ответы и др.)',
  ];

  const usage = [
    'На индивидуальных занятиях',
    'В мини-группах',
    'На курсах по обучению чтению',
    'Дома с родителями',
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-slate-800 overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(201,182,228,0.28),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(246,217,122,0.25),_transparent_25%),radial-gradient(circle_at_center,_rgba(214,238,208,0.35),_transparent_30%),linear-gradient(180deg,#fffdfd_0%,#fff9fc_100%)]" />

      <header className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-3 shadow-[0_10px_30px_rgba(201,182,228,0.16)]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#C9B6E4] via-[#FBE7EF] to-[#D6EED0] flex items-center justify-center text-xl shadow-md">
              🦉
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">Read with Owly</div>
              <div className="text-xs text-slate-500">Phonics • Reading • Listening • Writing</div>
            </div>
          </div>
          <a
            href="#buy"
            className="hidden sm:inline-flex rounded-full bg-[#C9B6E4] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_8px_20px_rgba(201,182,228,0.35)] transition hover:-translate-y-0.5"
          >
            Купить пособие
          </a>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-14">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DEF5] bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span>✨</span>
                <span>Авторское phonics-пособие по обучению чтению</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900">
                Пособие <span className="text-[#8D73BE]">«Read with Owly»</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-600">
                Современное пособие по обучению чтению на английском языке, созданное для детей, которые делают первые шаги в чтении. В книге ребёнок постепенно знакомится с буквами, звуками, учится читать слова, писать, слушать и понимать английскую речь через яркие задания, игровые упражнения и мини-комиксы.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <a
                  href="#buy"
                  className="inline-flex items-center justify-center rounded-full bg-[#C9B6E4] px-7 py-4 text-base font-bold text-slate-900 shadow-[0_16px_35px_rgba(201,182,228,0.38)] transition hover:-translate-y-1"
                >
                  Купить пособие
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-[#E7DDF3] bg-white/85 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-white"
                >
                  Посмотреть подробнее
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ['90 стр.', 'Формат A4'],
                  ['Phonics', 'Пошаговое чтение'],
                  ['Аудио + бонусы', 'По QR-коду'],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_30px_rgba(214,238,208,0.22)] backdrop-blur">
                    <div className="text-2xl font-black text-slate-900">{value}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-[#F6D97A]/50 blur-2xl" />
              <div className="absolute -bottom-6 -right-3 h-28 w-28 rounded-full bg-[#C9B6E4]/40 blur-2xl" />

              <div className="relative rounded-[32px] border border-white/70 bg-white/85 p-5 sm:p-6 shadow-[0_24px_60px_rgba(201,182,228,0.22)] backdrop-blur">
                <div className="rounded-[28px] bg-gradient-to-br from-[#FBF5FF] via-[#FFFDFB] to-[#F5FFF3] p-6 sm:p-7 border border-[#F2EAFB]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold tracking-[0.22em] uppercase text-[#8D73BE]">Little readers</div>
                      <div className="mt-2 text-2xl font-black text-slate-900 leading-tight">Красивое и продуманное пособие для первых шагов в чтении</div>
                    </div>
                    <div className="shrink-0 h-16 w-16 rounded-3xl bg-gradient-to-br from-[#C9B6E4] to-[#FBE7EF] flex items-center justify-center text-3xl shadow-md">
                      🦉
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      'Буквы и звуки',
                      'Слова, словосочетания и предложения',
                      'Listening и письмо',
                      'Комиксы и игровые задания',
                    ].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-sm border border-white">
                        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center text-lg ${i % 2 === 0 ? 'bg-[#DFF0DA]' : 'bg-[#FDE8BE]'}`}>
                          {i === 0 ? '🔡' : i === 1 ? '📘' : i === 2 ? '🎧' : '🌟'}
                        </div>
                        <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-3xl bg-[#FFF7FB] border border-[#F5DDEA] p-5">
                    <div className="text-sm text-slate-500">Подходит для</div>
                    <div className="mt-2 text-lg font-bold text-slate-900">уроков, мини-групп и домашних занятий</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
            <div className="rounded-[30px] bg-white/85 border border-white/70 p-6 sm:p-8 shadow-[0_18px_40px_rgba(201,182,228,0.16)]">
              <div className="inline-flex rounded-full bg-[#F3ECFB] px-4 py-2 text-sm font-semibold text-[#8D73BE]">📌 Для кого это пособие</div>
              <div className="mt-6 space-y-4">
                {audience.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-[#FFFDFE] p-4 border border-[#F0E8F7]">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-[#D6EED0] flex items-center justify-center text-xs">✓</div>
                    <p className="text-slate-700 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-gradient-to-br from-[#FEFCFF] to-[#FFFDF7] border border-white/70 p-6 sm:p-8 shadow-[0_18px_40px_rgba(246,217,122,0.15)]">
              <div className="inline-flex rounded-full bg-[#FFF0C8] px-4 py-2 text-sm font-semibold text-slate-700">✨ Почему это пособие особенное?</div>
              <div className="mt-6 grid gap-4">
                {reasons.map((item, idx) => (
                  <div key={item} className="rounded-2xl bg-white/90 border border-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-xl bg-[#FBE7EF] flex items-center justify-center text-sm font-bold text-slate-700">{idx + 1}</div>
                      <p className="text-slate-700 leading-7">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex rounded-full bg-[#EAF6E6] px-4 py-2 text-sm font-semibold text-slate-700">📚 Что есть в пособии</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900">Содержание, выстроенное шаг за шагом</h2>
            </div>
            <p className="max-w-xl text-slate-500 leading-7">
              Материал организован последовательно: от знакомства с буквами и звуками до более уверенного чтения и работы с языком в контексте.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((item) => (
              <div key={item.title} className="group rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_16px_36px_rgba(201,182,228,0.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(201,182,228,0.18)]">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#C9B6E4] via-[#FBE7EF] to-[#D6EED0] flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div className="h-2.5 w-16 rounded-full bg-[#F3ECFB] overflow-hidden">
                    <div className="h-full w-10 rounded-full bg-[#C9B6E4]" />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{item.text}</p>
                <div className="mt-4 rounded-2xl bg-[#FCFAFF] border border-[#EFE6F8] p-4 text-sm font-medium text-[#7B659F]">
                  👉 {item.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-[30px] bg-white/85 border border-white/70 p-6 sm:p-8 shadow-[0_18px_40px_rgba(201,182,228,0.14)]">
              <div className="inline-flex rounded-full bg-[#EAF6E6] px-4 py-2 text-sm font-semibold text-slate-700">💻 Что есть в комплекте</div>
              <div className="mt-6 space-y-4">
                {bundleItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#EDF6EA] bg-[#FAFFF8] p-4">
                    <div className="h-8 w-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      {index === 0 ? '📘' : index === 1 ? '🎵' : '📂'}
                    </div>
                    <p className="text-slate-700 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-white/85 border border-white/70 p-6 sm:p-8 shadow-[0_18px_40px_rgba(251,231,239,0.18)]">
              <div className="inline-flex rounded-full bg-[#FDECF2] px-4 py-2 text-sm font-semibold text-slate-700">🧩 Где можно использовать</div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {usage.map((item, index) => (
                  <div key={item} className="rounded-2xl bg-[#FFFDFE] border border-[#F6E7EE] p-5">
                    <div className="text-2xl">{index === 0 ? '👩‍🏫' : index === 1 ? '👥' : index === 2 ? '🎓' : '🏡'}</div>
                    <div className="mt-3 text-slate-800 font-semibold leading-7">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-gradient-to-br from-[#C9B6E4]/28 via-white/90 to-[#FDE7B7]/45 p-6 sm:p-8 lg:p-10 shadow-[0_30px_70px_rgba(201,182,228,0.22)]">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#D6EED0]/70 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#FBE7EF]/80 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1fr_0.8fr] gap-8 items-start">
              <div>
                <div className="inline-flex rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[#7B659F] shadow-sm">💳 Формат и стоимость</div>
                <h2 className="mt-5 text-3xl sm:text-4xl font-black text-slate-900">Пособие уже доступно!</h2>
                <p className="mt-4 max-w-2xl text-slate-600 leading-8">
                  Яркое, продуманное и методически выстроенное пособие, которое помогает ребёнку сделать первые уверенные шаги в чтении на английском языке. Подойдёт тем, кто хочет не просто пройти буквы, а действительно научить ребёнка читать с пониманием и интересом.
                </p>

                <div className="mt-6 rounded-[28px] bg-white/90 border border-white p-5 sm:p-6 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#FCFAFF] p-4 border border-[#EFE6F8]">
                      <div className="text-sm text-slate-500">Формат</div>
                      <div className="mt-2 text-lg font-bold text-slate-900">Книга A4 • 90 стр.</div>
                    </div>
                    <div className="rounded-2xl bg-[#FFFCF3] p-4 border border-[#F7E8B5]">
                      <div className="text-sm text-slate-500">Стоимость</div>
                      <div className="mt-2 text-lg font-bold text-slate-900">900 ₽ + доставка</div>
                    </div>
                    <div className="sm:col-span-2 rounded-2xl bg-[#F8FFF6] p-4 border border-[#E2F1DD]">
                      <div className="text-sm text-slate-500">Дополнительно</div>
                      <div className="mt-2 text-base font-semibold text-slate-800">Аудио и дополнительные материалы бесплатно доступны для скачивания по QR-коду.</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 leading-6">
                    Этот блок легко редактируется: здесь можно быстро заменить стоимость, формат, состав комплекта и текст кнопки на актуальные данные.
                  </p>
                </div>
              </div>

              <div className="rounded-[30px] bg-white/90 border border-white p-6 sm:p-7 shadow-[0_18px_40px_rgba(201,182,228,0.15)]">
                <div className="text-sm font-semibold tracking-[0.18em] uppercase text-[#8D73BE]">Заказ</div>
                <div className="mt-3 text-2xl font-black text-slate-900">Готово для покупки и красивой презентации</div>
                <p className="mt-4 text-slate-600 leading-7">
                  Оформите заказ и начните заниматься с удовольствием. Сайт адаптирован под дальнейшую замену ссылки на покупку, форму заказа или кнопку перехода в сообщения.
                </p>

                <div className="mt-6 space-y-3">
                  {['Подходит для родителей', 'Удобно для преподавателей', 'Привлекательно для детских курсов'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#FFFDFE] border border-[#F0E8F7] px-4 py-3">
                      <div className="h-7 w-7 rounded-full bg-[#D6EED0] flex items-center justify-center text-sm">✓</div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C9B6E4] px-7 py-4 text-lg font-bold text-slate-900 shadow-[0_16px_35px_rgba(201,182,228,0.35)] transition hover:-translate-y-1"
                >
                  Купить пособие
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-10 pt-4 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[28px] border border-white/70 bg-white/80 px-6 py-6 shadow-[0_12px_30px_rgba(201,182,228,0.12)] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <div className="text-lg font-bold text-slate-900">Read with Owly</div>
              <div className="text-sm text-slate-500">Красивое phonics-пособие для первых шагов в чтении</div>
            </div>
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-full bg-[#F6D97A] px-8 py-4 text-base font-bold text-slate-900 shadow-[0_14px_30px_rgba(246,217,122,0.28)] transition hover:-translate-y-1"
            >
              Купить пособие
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}