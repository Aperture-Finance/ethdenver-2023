import { ButtonGroups } from ".";
export default {
  title: "Components/ButtonGroups",
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <div style={{ width: "500px" }}>
        <ButtonGroups
          onSelect={(feeTier:Number) =>
            console.log("feeTier selected: ", feeTier)
          }
        />
      </div>
    </>
  );
};
