import dynamic from 'next/dynamic';

import { useModalStore } from '~/store/modal';


const TodoModal = dynamic(() => import("./Todo"));

const IModals = {
    TODO: TodoModal,
}

const Modals: React.FC = () => {
    const { modal } = useModalStore(); 

    if(modal.state) {
        const Child = IModals[modal.state];

        return (
            <div className="z-[2]">
                <Child />
            </div>
        )
    }
}

export default Modals;