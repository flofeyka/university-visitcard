export default function About() {
  return (
    <div className="bg-white rounded-[35px] min-h-[250px] my-5 shadow-2xl p-5">
      <div className="flex justify-between">
        <div className="text-[25px]">
          <div className="text-[35px] w-full flex font-semibold">
            Преимущества факультета ИТСКИ
          </div>

          <li>Дружелюбный коллектив</li>
          <li>Получение ценных знаний</li>
          <li>Преимущества при поиске профессии</li>
        </div>
        <div className="text-[25px]">
          <div className="text-[35px] font-semibold">Основные методы обучения</div>
          <li>Практика в отелях</li>
          <li>Посещение гостиниц для анализа качества</li>
          <li>Интервью у предприятий сервиса</li>
        </div>
      </div>
    </div>
  );
}
