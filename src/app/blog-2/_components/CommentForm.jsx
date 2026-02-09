const CommentForm = () => {
  return (
    <div>
      <header className="mb-5">
        <h1 className=" text-2xl text-dark-gray font-bold">Leave A Comment </h1>
        <span className="inline-block w-20 bg-gold h-[3px] "></span>
      </header>

      <div>
        <form className="flex bg-white shadow-icon p-8 w-full flex-col gap-4">
          <div className="bg-mint w-full  px-5  relative ">
            <textarea
              className="h-[197px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent "
              type="text"
              placeholder="Comment*"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="bg-mint w-full  px-5  relative">
              <input
                className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                type="text"
                placeholder="Name*"
                required
              />
            </div>
            <div className="bg-mint w-full   px-5  relative">
              <input
                className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                type="email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="bg-mint w-full   px-5  relative">
              <input
                className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                type="text"
                placeholder="Website"
              />
            </div>
          </div>

          <div className="w-full relative mt-4">
            <label
              htmlFor="checkbox"
              className="text-xs text-dark-gray flex items-center gap-2 cursor-pointer"
            >
              <input
                className="bg-slate-600 form-checkbox  h-4 w-4"
                id="checkbox"
                type="checkbox"
              />
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button className="h-[66px] rounded-sm duration-500 transition-all hover:bg-purple bg-gold w-full sm:w-[188px] grid place-content-center text-lg font-medium text-white mt-5">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};
export default CommentForm;
