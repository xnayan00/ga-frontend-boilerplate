import Icon from "@atoms/Icon";
import Avatar from "@atoms/Avatar";
import ButtonGroup from "@molecules/ButtonGroup";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Avatar alt="Jhon Due"></Avatar>
      <ButtonGroup
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
      />
      <Icon
        name="home"
        size="lg"
      />
    </div>
  );
}
