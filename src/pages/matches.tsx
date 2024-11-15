import { useEffect, useState } from 'react';
import { generateTherapist, Therapist } from '../utils/therapistGenerator';
import TherapistCard from '../components/TherapistCard';

export default function Matches() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    // Generar 5 terapeutas aleatorios
    const randomTherapists = Array.from({ length: 5 }, generateTherapist);
    setTherapists(randomTherapists);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Terapeutas Recomendados</h1>
        
        <div className="space-y-6">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>

        {therapists.length === 0 && (
          <div className="text-center text-gray-500">
            Cargando terapeutas...
          </div>
        )}
      </div>
    </div>
  );
}