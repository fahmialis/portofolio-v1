import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { TextAlignJustify, XIcon } from "lucide-react";

interface NavbarProps {
  onClick: (name: "home" | "about" | "details" | "works" | "skills") => void;
}

export default function Navbar(props: NavbarProps) {

  console.log({ props })

  return (
    <section className='flex justify-between'>
      <div className='text-[16px]'>Fahmi Sinergia</div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <TextAlignJustify className='size-6' />
          </DialogTrigger>
          <DialogContent
            className='w-screen h-screen max-w-full p-8 md:p-16 flex justify-between'
            showCloseButton={false}
          >
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>Side bar header</DialogTitle>
                <DialogDescription>Header for sidebar</DialogDescription>
              </DialogHeader>
            </VisuallyHidden>
            <div className='flex justify-between w-full'>
              <div>
                <div className='font-extrabold text-4xl'>Home</div>
                <div className='font-extrabold text-4xl'>
                  Works
                  <ul className='pl-6'>
                    <li className='list-none'>Item without 1</li>
                    <li className='list-none'>Item without 2</li>
                  </ul>
                </div>
                <div className='font-extrabold text-4xl'>Contact</div>
              </div>
              <DialogClose className='flex items-start h-fit'>
                <XIcon className='size-6' />
              </DialogClose>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </section>
  );
}
