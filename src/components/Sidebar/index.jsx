import React from "react";

const Sidebar = () => {
  return (
    <div className="w-72 shrink-0">
      <div className="text-center rounded-t-2xl border-2 border-gray-200 border-b-0 overflow-hidden">
        <div className="flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1564934303963-6dc633d0e192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="decor" />
          <img
            src="/setner.jpg"
            alt="avatar"
            className="w-32 h-32 rounded-full object-cover object-center -mt-16 mb-2"
          />
          <div>Setner</div>
          <div>Ivanovmich@mail.ru</div>
        </div>
        <div>
          <div>Кто посетил вас</div>
          <div>2,543</div>
        </div>
        <div>
          <div>Просмотры</div>
          <div>2,543</div>
        </div>
      </div>
      <div className="sticky top-0 py-6 px-4 border-2 border-gray-200 border-t-0 rounded-b-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque perferendis eligendi quasi deleniti autem sint quidem exercitationem eos? Facere possimus modi nihil, non ab voluptas provident obcaecati molestias odio cupiditate.
      </div>
    </div>
  );
};

export default Sidebar;
