
import Card from '../../components/Cards/Card';
import Background from 'components/Background';

export default function Companies(){
    return (
        <div className='bg-slate-700'>
            <Background />
            <div className='flex justify-center'>

                <div className='flex bg-red-300'>
                    <div className='bg-amarelo_areia opacity-50 w-[1440px] h-screen rounded-xl flex flex-wrap p-10'>
                        <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
                    </div>
                </div>

            </div>
        </div>
    )
}
