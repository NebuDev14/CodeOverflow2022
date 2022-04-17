const Nav = () => {
    return (
        <div className="relative w-1/2 py-8 text-white rounded-xl self-center m-auto t-12">
            <div className="relative flex w-full justify-between font-mono">
                <a href = '/' className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white rounded-2xl p-2 hover:scale-105 duration-200">eduHUB</a>
                
                
                <div className="flex relative">
                    <a className="self-center hover:scale-105">Create</a>
                    <a href='/account/register' className="self-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 pl-2 ml-2 self-center"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>
            
        </div>
    );
  };
  
  export default Nav;