import { faker } from '@faker-js/faker/locale/es';

export interface Therapist {
  id: string;
  name: string;
  specialties: string[];
  languages: string[];
  schedule: string[];
  communicationType: string[];
  experience: number;
  rating: number;
  price: number;
  description: string;
  photoUrl: string;
}

const specialties = [
  'Terapia Cognitivo-Conductual',
  'Psicoanálisis',
  'Terapia Humanista',
  'Terapia Gestalt',
  'Terapia Sistémica',
  'Mindfulness',
  'Terapia de Pareja',
  'Terapia Familiar'
];

const languages = ['Español', 'Inglés', 'Francés', 'Portugués'];
const schedules = ['Mañana', 'Tarde', 'Noche', 'Fines de semana'];
const communicationTypes = ['Videollamada', 'Chat', 'Llamada telefónica', 'Presencial'];

export function generateTherapist(): Therapist {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    specialties: faker.helpers.arrayElements(specialties, { min: 1, max: 3 }),
    languages: faker.helpers.arrayElements(languages, { min: 1, max: 3 }),
    schedule: faker.helpers.arrayElements(schedules, { min: 2, max: 4 }),
    communicationType: faker.helpers.arrayElements(communicationTypes, { min: 1, max: 3 }),
    experience: faker.number.int({ min: 1, max: 30 }),
    rating: faker.number.float({ min: 4, max: 5, precision: 0.1 }),
    price: faker.number.int({ min: 40, max: 120 }) * 10,
    description: faker.lorem.paragraph(),
    photoUrl: faker.image.avatar()
  };
}