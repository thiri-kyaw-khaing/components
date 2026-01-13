type InfoDetailProps = {
  title: string;
  info: string;
};

function InfoDetail({ title, info }: InfoDetailProps) {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-sm">{info}</p>
      </div>
    </>
  );
}

export default InfoDetail;
