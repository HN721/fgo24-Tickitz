import React from "react";
import { ShieldCheck, Wallet, Headphones } from "lucide-react";

export default function Benefit() {
  return (
    <section className="bg-primary text-white py-12 px-12 rounded-[2rem]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0">
        <div className="lg:w-1/2">
          <span className="bg-brand text-secondary font-semibold text-sm px-4 py-1 rounded-full inline-block mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-6xl font-display font-med leading-tight text-white">
            Unleashing the <br /> Ultimate Movie <br /> Experience
          </h2>
        </div>

        <div className="flex  lg:flex-row  flex-col mx-12 gap-4 lg:w-1/2">
          <BenefitCard
            icon={<ShieldCheck className="w-6 h-6 text-brand" />}
            title="Guaranted"
            description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
          <BenefitCard
            icon={<Wallet className="w-6 h-6 text-brand" />}
            title="Affordable"
            description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
          <BenefitCard
            icon={<Headphones className="w-6 h-6 text-brand" />}
            title="24/7 Customer Support"
            description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Komponen kartu manfaat/benefit yang menampilkan ikon, judul, dan deskripsi.
 *
 * @param {Object} props
 * @param {JSX.Element} props.icon - Ikon yang ditampilkan di atas kartu.
 * @param {string} props.title - Judul manfaat.
 * @param {string} props.description - Deskripsi singkat manfaat.
 */
function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white text-font-primary rounded-xl p-4 flex-1 min-w-[200px] shadow-sm">
      <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full mb-3">
        {icon}
      </div>
      <h3 className="font-display font-md text-primary mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-snug">{description}</p>
    </div>
  );
}
