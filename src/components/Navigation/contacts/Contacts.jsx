export default function Contacts() {
  return (
    <div className="bg-white min-h-[250px] p-4 rounded-[35px] mt-5 shadow-2xl">
      <div className="text-[45px] w-full flex justify-center font-semibold">Контакты</div>
      <div className="text-[22.5px] flex justify-between">
        <div>
          <div className="flex">
            <img src="/Icons/Phone.svg" height="30px" width="30px" />
            {"  "}
            <b>Номер телефона</b>: 88005553535
          </div>
          <div className="flex">
            <img src="/Icons/Email.svg" height="30px" width="30px" />
            {"  "}
            <b>Электронная почта</b>: itski@sfedu.ru
          </div>
          <div className="flex">
            <img src="/Icons/Location.svg" height="30px" width="30px" />
            {"  "}
            <b>Юридический адрес</b>: Ростов-на-Дону, ул. Б. Садовая, 105
          </div>
        </div>
        <div className="pr-10">
            <div className="flex"><img src="/Icons/Mailbox.svg" height="30px" width="30px" />
                <b>Почтовый индекс</b>: 344006</div>
            <div className="flex"><img src="/Icons/CEO.svg" height="30px" width="30px" />
                <b>Ректор</b>: Инна Шевченко</div>
        </div>
      </div>
    </div>
  );
}
