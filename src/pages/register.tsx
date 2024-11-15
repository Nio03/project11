import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mainReason: '',
    supportType: '',
    preferredModality: '',
    frequency: '',
    schedule: '',
    therapistGender: '',
    languages: [],
    previousTherapy: false,
    comfortLevel: 3,
    therapyMethod: '',
    approachPreference: '',
    specialConsiderations: '',
    expectations: '',
    techComfort: '',
    importantDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/matches');
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

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Registro de Usuario</h1>
        
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
            <label className="block mb-2">Nombre</label>
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
            <label className="block mb-2">¿Cuál es tu principal motivo para buscar terapia?</label>
            <input
              type="text"
              name="mainReason"
              value={formData.mainReason}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">¿Qué tipo de apoyo estás buscando?</label>
            <input
              type="text"
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">¿Qué modalidad de terapia prefieres?</label>
            <select
              name="preferredModality"
              value={formData.preferredModality}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="videollamada">Videollamada</option>
              <option value="chat">Chat</option>
              <option value="telefono">Llamadas telefónicas</option>
              <option value="presencial">Presencial</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">¿Con qué frecuencia te gustaría tener sesiones?</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="semanal">Semanalmente</option>
              <option value="quincenal">Quincenalmente</option>
              <option value="necesario">Según sea necesario</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">¿Qué horario prefieres?</label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="manana">Mañanas</option>
              <option value="tarde">Tardes</option>
              <option value="noche">Noches</option>
              <option value="finsemana">Fines de semana</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">¿Tienes preferencia en cuanto al género del terapeuta?</label>
            <select
              name="therapistGender"
              value={formData.therapistGender}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="indiferente">No importa</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">¿Has recibido terapia previamente?</label>
            <select
              name="previousTherapy"
              value={formData.previousTherapy.toString()}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="false">No</option>
              <option value="true">Sí</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Nivel de comodidad hablando con desconocidos (1-5)</label>
            <input
              type="range"
              name="comfortLevel"
              min="1"
              max="5"
              value={formData.comfortLevel}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2">¿Qué método de terapia te interesa?</label>
            <select
              name="therapyMethod"
              value={formData.therapyMethod}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="cognitivo">Cognitivo-conductual</option>
              <option value="psicodinamico">Psicodinámico</option>
              <option value="humanista">Humanista</option>
              <option value="noSeguro">No estoy seguro</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">¿Prefieres un enfoque estructurado o flexible?</label>
            <select
              name="approachPreference"
              value={formData.approachPreference}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="estructurado">Estructurado</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Consideraciones especiales</label>
            <textarea
              name="specialConsiderations"
              value={formData.specialConsiderations}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2">¿Cuáles son tus expectativas de la terapia?</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2">¿Qué tan cómodo te sientes con la tecnología?</label>
            <select
              name="techComfort"
              value={formData.techComfort}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona una opción</option>
              <option value="muyCómodo">Muy cómodo</option>
              <option value="algo">Algo cómodo</option>
              <option value="poco">Poco cómodo</option>
              <option value="prefiero-presencial">Prefiero presencial</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Detalles importantes adicionales</label>
            <textarea
              name="importantDetails"
              value={formData.importantDetails}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}