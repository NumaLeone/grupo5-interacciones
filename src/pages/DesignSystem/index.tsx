import Button from "../../components/Button";
import BookmarkButton from "../../components/BookmarkButton";

const DesignSystem = () => {

    const handleClick = () =>{
        console.log(1)
       return 1
    }
  return (
    <>
        <div className={"mb-2"}>
      <Button variant={"outlined"}>Outlined</Button>
        </div>
        <div className={"mb-2"}>
      <Button variant={"fulfilled"}>Fulfilled</Button>
        </div>
        <div className={"mb-2"}>
           <BookmarkButton size={24} checked={true} onClick={handleClick}></BookmarkButton>
        </div>
        <div className={"mb-2"}>
            <BookmarkButton size={32} checked={false} onClick={handleClick}></BookmarkButton>
        </div>
    </>
  );
};

export default DesignSystem;
