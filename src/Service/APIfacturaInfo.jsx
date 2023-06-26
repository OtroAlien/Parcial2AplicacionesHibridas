import { useEffect, useState } from 'react';
import axios from 'axios';

const useFacturaInfo = (id) => {
  const [datosFactura, setDatosFactura] = useState(null);

  useEffect(() => {
    const fetchFactura = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/v1/getDatosFactura?id=${id}`);
        const data = response.data;
        setDatosFactura(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchFactura();
  }, [id]);
  console.log(datosFactura);
  return datosFactura;
};

export default useFacturaInfo;