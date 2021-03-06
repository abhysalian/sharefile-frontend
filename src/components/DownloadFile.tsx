const DownloadFile = ({ downloadPageLink }) => {
    return (
      <div className="p-2">
        <h1 className="my-2 text-lg font-medium">
        ๐Great! File is uploaded , Share this link with your friend..๐
        </h1>
        <div className="flex space-x-3">
          <span className="break-all">{downloadPageLink}</span>
          <img
            src="/images/copy.png"
            alt=""
            className="object-contain w-8 h-8 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(downloadPageLink)}
          />
        </div>
      </div>
    );
  };
  
  export default DownloadFile;