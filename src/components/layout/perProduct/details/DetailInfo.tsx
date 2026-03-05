interface DetailInfoProps {
  detailOpen: boolean
}

export default function DetailInfo({detailOpen}: DetailInfoProps) {
  return (
    <div className={`dropdown-text ${detailOpen ? 'isDetailsOpen' : ''}`}>
      <p>
        The U28 2-layer bib is equipped with Dryplay 20K technology, keeping you
        dry even in the wettest conditions. Fully taped seams and a PFC-free
        Teflon Ecoelite™ water-repellent coating provide extra protection
        against moisture. Functionality is one of the strengths of the U28 bib,
        as evidenced by the snow gaiters, hand pockets, thigh pockets, and chest
        pocket. The fit and comfort have been meticulously designed. Adjustable
        straps at the waist and shoulders allow you to tailor the pants to your
        preference, layer clothing, and ensure the pants stay in place during
        intense hikes. This bib also features snap buttons at the lower hem,
        offering multiple adjustment
        The U28 2-layer bib is equipped with Dryplay 20K technology, keeping you
        dry even in the wettest conditions. Fully taped seams and a PFC-free
        Teflon Ecoelite™ water-repellent coating provide extra protection
        against moisture. Functionality is one of the strengths of the U28 bib,
        as evidenced by the snow gaiters, hand pockets, thigh pockets, and chest
        pocket. The fit and comfort have been meticulously designed. Adjustable
        straps at the waist and shoulders allow you to tailor the pants to your
        preference, layer clothing, and ensure the pants stay in place during
        intense hikes. This bib also features snap buttons at the lower hem,
        offering multiple adjustment
      </p>
    </div>
  );
}
