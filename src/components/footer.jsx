import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaLinkedin,
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaTwitter,
    FaVoicemail,
    FaYoutube,
} from "react-icons/fa";
import appRoutes from "../routes/routes";

export default function Footer() {
    return (
        <footer className="w-screen py-4 padx bg-black padHor items-center justify-center gap-y-6 text-white">
            <div className="flex justify-between text-zinc-400 my-4 items-center">
                <div className='flex-col w-[650px]'>
                    <h3 className="text-xl font-bold mb-1 text-white">Règlement</h3>
                    <p className="w-full mb-3">
                        Toutes les photos doivent être prises dans le contexte de chaque sous thème à l’aide d'un Smartphone. Les retouches sont autorisées ainsi que les filtres. Tous les candidats ne respectant pas les sous thèmes énumérés <a className='text-white'>dans cette page</a> seront éliminés.
                    </p>
                    <p className="w-full">
                        Pour passer à la seconde étape, chaque candidat devra cumuler un maximum de points et seront retenus ceux qui auront bien évidement le plus de votes. Chaque vote vous sera débité d’un montant de 10 FCFA chacun et susceptible d’évoluer au cours des étapes suivantes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1 text-white">Bureau Principal</h3>
                    <div className='flex flex-col gap-y-3'>
                        <div className="flex gap-x-2 items-center">
                            <FaMapMarkedAlt /> <p>Bonamousadi, Douala, Cameroon</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaVoicemail /> <p>icebergplus47@gmail.com</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaPhoneAlt /> <p>+(237) 678 10 02 82 (CM)</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaPhoneAlt /> <p>+(237) 658 85 30 98 (CM)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1 text-white">Liens Utiles</h3>
                    <ul className="flex items-center flex-col gap-y-1">
                        {Object.values(appRoutes).map((e) => (
                            <li key={e.name} className="rounded bg-opacity-20 cursor-pointer hover:text-white duration-200 ">
                                <Link key={e.name} href={e.path}>{e.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-col items-center text-center">
                    <p className="mb-2 text-xl font-bold  text-white">Suivez-Nous</p>
                    <div className="flex gap-x-3">
                        <div className="social-icons scale-100 hover:scale-110 hover:border-blue-700 hover:bg-blue-700">
                            <FaFacebookF />
                        </div>
                        <div className="social-icons scale-100 hover:scale-110 hover:border-blue-400 hover:bg-blue-400">
                            <FaTwitter />
                        </div>
                        <div className="social-icons scale-100 hover:scale-110 hover:border-red-700 hover:bg-red-700">
                            <FaYoutube />
                        </div>
                        <div className="social-icons scale-100 hover:scale-110 hover:border-blue-700 hover:bg-blue-700">
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
            <div className="flex justify-between text-zinc-400 my-2 mt-2">
                <div className="flex gap-x-4 ">
                    <p className="cursor-pointer uppercase hover:text-white">Privacy policy</p>
                    <p className="cursor-pointer hover:text-white">TERMS AND CONDITIONS</p>
                </div>
                <div>
                    <p>&#169; 2023, All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
