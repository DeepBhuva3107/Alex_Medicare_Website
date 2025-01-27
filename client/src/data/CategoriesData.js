import getImagePath from "../utils/imageHelper";


const categories = [
  {
    id: 1,
    name: 'Infusion & Transfusion',
    products: [
      { id: 2, name: 'IV Set', description: 'Sterile intravenous sets for medical use.', image: require('../assets/images/urinebag.jpeg') }, 
      { id: 3, name: 'Y Connector IV Set', description: 'Efficient Y connector IV sets.', image: getImagePath('top_urinebag.jpg') },
      { id: 4, name: 'Blood Transfusion Set', description: 'Blood transfusion sets for medical use.', image: 'blood_transfusion_set.jpg' },
      { id: 5, name: 'Blood Donor Set', description: 'Blood donor sets for medical use.', image: 'blood_donor_set.jpg' },
      { id: 6, name: 'Blood Administration Set', description: 'Blood administration sets for medical use.', image: 'blood_administration_set.jpg' },
      { id: 7, name: 'Blood Bag', description: 'Blood bags for medical use.', image: 'blood_bag.jpg' }
    ],
  },
  {
    id: 2,
    name: 'Urology',
    products: [
      { id: 8, name: 'Urine Bag', description: 'High-quality disposable urine bags.', image: 'urine_bag.jpg' },
      { id: 9, name: 'Urine Collection Bag', description: 'Urine collection bags for medical use.', image: 'urine_collection_bag.jpg' },
      { id: 10, name: 'Urine Meter Bag', description: 'Urine meter bags for medical use.', image: 'urine_meter_bag.jpg' },
      { id: 11, name: 'Urine Leg Bag', description: 'Urine leg bags for medical use.', image: 'urine_leg_bag.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Gastroenterology',
    products: [
      { id: 12, name: 'Nasogastric Tube', description: 'Flexible nasogastric tubes for medical use.', image: 'nasogastric_tube.jpg' },
      { id: 13, name: 'Ryle\'s Tube', description: 'Ryle\'s tubes for medical use.', image: 'ryles_tube.jpg' },
      { id: 14, name: 'Stomach Tube', description: 'Stomach tubes for medical use.', image: 'stomach_tube.jpg' },
    ],
  },
  {
    id: 4,
    name: 'Miscellaneous Range',
    products: [
      { id: 15, name: 'Face Mask', description: 'Disposable face masks for protection against germs.', image: 'face_mask.jpg' },
      { id: 16, name: 'Surgical Gloves', description: 'Sterile surgical gloves for medical use.', image: 'surgical_gloves.jpg' },
      { id: 17, name: 'Syringe', description: 'Disposable syringes for medical use.', image: 'syringe.jpg' },
    ],
  },
  {
    id: 4,
    name: 'Surgcial Equipments',
    products: [
      { id: 15, name: 'Face Mask', description: 'Disposable face masks for protection against germs.', image: 'face_mask.jpg' },
      {id: 16, name: 'Surgical Gloves', description: 'Sterile surgical gloves for medical use.', image: 'surgical_gloves.jpg' },

    ],
  }
];
export default categories;