export const HeaderText = () => {
    return (
      <div>
        <header className=" text-violet-700 py-2">
          <h1 className="text-3xl font-bold">Welcome to GroupMate!</h1>
        </header>
        
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg text-gray-700">Upload a CSV to get started: </p>
        </div>
      </div>
    );
  }

export default HeaderText;