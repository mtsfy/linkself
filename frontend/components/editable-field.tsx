import { BsCheck, BsPencil } from "react-icons/bs";
import { Input } from "./ui/input";

interface EditableFieldProps {
  isEditing: boolean;
  placeholder: string;
  value: string;
  disabled: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (value: any) => void;
  valueStyle?: string;
}

const EditableField: React.FC<EditableFieldProps> = ({
  isEditing,
  placeholder,
  value,
  disabled,
  onOpen,
  onClose,
  onChange,
  valueStyle,
}) => {
  if (isEditing) {
    return (
      <div className="w-full flex items-center gap-4">
        <Input
          value={value}
          placeholder={placeholder}
          className=""
          disabled={disabled}
          onChange={(e) => onChange(e)}
        />
        <div className="cursor-pointer transition" onClick={() => onClose()}>
          <BsCheck size={25} />
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-fit flex items-center gap-x-3 cursor-pointer"
      onClick={() => onOpen()}
    >
      <h1 className={valueStyle}>{value}</h1>
      <BsPencil />
    </div>
  );
};

export default EditableField;
