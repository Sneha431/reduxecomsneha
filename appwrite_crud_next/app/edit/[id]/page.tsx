
import { useRouter } from 'next/router';
import EditFormdata from "../../components/EditFormdata";
import Formdata from '@/app/components/Formdata';

const Editpage = ({ params }: { params: { id: string } }) => {


  return <Formdata id={params.id} title="Edit Tech" />
}

export default Editpage;


