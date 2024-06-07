const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          maiores quia optio impedit veritatis enim, quis eum possimus. Natus
          nisi quaerat dicta ipsa itaque deserunt illo doloremque unde
          repellendus cum possimus magnam libero qui quae ipsum ut velit,
          cupiditate facere asperiores exercitationem doloribus dolorum eos eius
          amet! Nemo ducimus velit quisquam perferendis nisi facere eum!
        </p>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure dolor
          quae fuga cum expedita maxime ullam. Aperiam possimus corporis animi
          blanditiis eum?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
