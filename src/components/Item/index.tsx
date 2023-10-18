type ItemPropsAhihi = {
  label: string;
  hiKhoa?: number;
};

const Item = (props: ItemPropsAhihi) => {
  return (
    <div>
      {props.label}
      <p>hi{props.hiKhoa}</p>
    </div>
  );
};

export default Item;
