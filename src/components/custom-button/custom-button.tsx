import { CustomButtonUpload } from "./custom-button.styles";

type CustomButtonProps = {
  onSelectPicture: HTMLInputElement | any;
};

const CustomButton = ({ onSelectPicture }: CustomButtonProps) => {
  return (
    <CustomButtonUpload onClick={() => onSelectPicture()}>
      Upload new Image
    </CustomButtonUpload>
  );
};

export default CustomButton;
