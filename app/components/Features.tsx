import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            title="Epic Character Creation"
            description="Forge your destiny with our deep character customization system. Choose from 12 unique classes, customize your appearance, and allocate skills to create a truly unique hero for your adventure."
            src="/hero/hc.jpeg"
          />
          <Feature
            title="Legendary Loot System"
            description="Discover thousands of unique weapons, armor, and magical artifacts. Each legendary item has its own history, special abilities, and can be upgraded through our advanced crafting system. Hunt for rare sets that grant powerful bonuses when combined."
            src="/hero/ls.jpeg"
          />
          <Feature
            title="Fearsome Adversaries"
            description="Face off against a diverse cast of enemies, from cunning goblins to ancient dragons. Each foe has unique behaviors, weaknesses, and attack patterns. Challenge epic bosses that will test your skills and reward you with incredible treasures."
            src="/hero/monsters.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
export default Features;

const Feature = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  return (
    <div className="bg-gradient-to-b cursor-pointer from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-600 transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-900/20">
      <h3 className="text-2xl font-bold text-slate-100 mb-4 px-6 pt-6">
        {title}
      </h3>
      <Image
        src={src}
        alt=""
        width={1200}
        height={800}
        className="w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className=" text-gray-300 p-4 mt-10">{description}</p>
    </div>
  );
};
