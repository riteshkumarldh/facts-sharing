import { CustomDialog } from "../shared/CustomDialog";
import { Button } from "../ui/button";
import AddpostModal from "./AddpostModal";

export default async function FiltersSection() {
  return (
    <div className="flex justify-between">
      <div>FiltersSection</div>
      <div>
        <CustomDialog component={<AddpostModal />} title="Add Post">
          <Button>Add Post</Button>
        </CustomDialog>
      </div>
    </div>
  );
}
