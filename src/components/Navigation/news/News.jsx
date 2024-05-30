export default function News() {
  return (
    <div className="w-[100vw] pb-10 pt-5 flex flex-col  items-center rounded-[45px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mt-5 bg-white">
      <div className="font-semibold text-[45px]">Новости</div>
      <div className="flex flex-col shadow-2xl rounded-[25px] min-w-[200px] max-w-[500px] my-2">
        <div className="flex p-3 justify-start">
          <div>
            <img className="rounded-full border-black border-[1px] border-solid mr-2"
              src="https://fs.worldskills.ru/upload/iblock/ec5/0lslz48qa80x7xarnt4ivlvtxnivvpmu.png"
              height="70px"
              width="80px"
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-xl">Южный Федеральный университет</div>
            <div className="text-[17px]">30.05.2024</div>
          </div>
        </div>
        <div className="px-5 pb-5">
          На прошлой неделе в Южном федеральном университете состоялся
          масштабный студенческий фестиваль "Культурное разнообразие", в рамках
          которого были представлены танцевальные номера, музыкальные
          выступления и культурные показатели различных стран мира. Студенты
          университета продемонстрировали свои таланты и творческие способности,
          подняв настроение всем присутствующим. Такие мероприятия способствуют
          укреплению дружбы и понимания между молодежью различных
          национальностей и культур.
        </div>
      </div>
    </div>
  );
}
