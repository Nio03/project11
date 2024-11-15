import { useState } from 'react';
import { useRouter } from 'next/router';

export default function TherapistRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    therapyType: [],
    language: [],
    schedule: [],
    communicationType: [],
    specializations: '',
    experience: '',
    approach: '',
    education: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/therapist/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/therapist/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name } = e.target;
    const values = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      [name]: values
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Registro de Terapeuta</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Nombre Completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Tipos de Terapia (múltiple)</label>
            <select
              multiple
              name="therapyType"
              value={formData.therapyType}
              onChange={handleMultiSelect}
              required
              className="w-full p-2 border rounded"
            >
              <option value="cognitivo">Cognitivo-conductual</option>
              <option value="psicodinamico">Psicodinámico</option>
              <option value="humanista">Humanista</option>
              <option value="sistemica">Terapia Sistémica</option>
              <option value="gestalt">Gestalt</option>
            </select>
            <small className="text-gray-500">Mantén presionado Ctrl/Cmd para seleccionar múltiples opciones</small>
          </div>

          <div>
            <label className="block mb-2">Idiomas (múltiple)</label>
            <select
              multiple
              name="language"
              value={formData.language}
              onChange={handleMultiSelect}
              required
              className="w-full p-2 border rounded"
            >
              <option value="espanol">Español</option>
              <option value="ingles">Inglés</option>
              <option value="frances">Francés</option>
              <option value="portugues">Portugués</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Horarios Disponibles (múltiple)</label>
            <select
              multiple
              name="schedule"
              value={formData.schedule}
              onChange={handleMultiSelect}
              required
              className="w-full p-2 border rounded"
            >
              <option value="manana">Mañanas</option>
              <option value="tarde">Tardes</option>
              <option value="noche">Noches</option>
              <option value="finsemana">Fines de semana</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Modalidades de Atención (múltiple)</label>
            <select
              multiple
              name="communicationType"
              value={formData.communicationType}
              onChange={handleMultiSelect}
              required
              className="w-full p-2 border rounded"
            >
              <option value="videollamada">Videollamada</option>
              <option value="chat">Chat</option>
              <option value="telefono">Llamadas telefónicas</option>
              <option value="presencial">Presencial</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Especializaciones</label>
            <textarea
              name="specializations"
              value={formData.specializations}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
              placeholder="Describe tus áreas de especialización"
            />
          </div>

          <div>
            <label className="block mb-2">Experiencia Profesional</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
              placeholder="Resume tu experiencia profesional"
            />
          </div>

          <div>
            <label className="block mb-2">Enfoque Terapéutico</label>
            <textarea
              name="approach"
              value={formData.approach}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
              placeholder="Describe tu enfoque terapéutico"
            />
          </div>

          <div>
            <label className="block mb-2">Educación y Certificaciones</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
              placeholder="Lista tu educación y certificaciones relevantes"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Registrarse como Terapeuta
          </button>
        </form>
      </div>
    </div>
  );
}