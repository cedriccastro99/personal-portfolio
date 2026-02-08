const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-black">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin dark:border-white dark:border-t-transparent"></div>
        <p className="mt-4 text-black dark:text-white">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;