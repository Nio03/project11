import { Therapist } from '../utils/therapistGenerator';

interface TherapistCardProps {
  therapist: Therapist;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={therapist.photoUrl}
          alt={therapist.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{therapist.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-600">{therapist.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-600">{therapist.experience} años de experiencia</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">{therapist.description}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-indigo-600">${therapist.price} USD</p>
          <p className="text-sm text-gray-500">por sesión</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {therapist.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {therapist.languages.map((language) => (
            <span
              key={language}
              className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded-full"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {therapist.communicationType.map((type) => (
            <span
              key={type}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Agendar Cita
        </button>
      </div>
    </div>
  );
}