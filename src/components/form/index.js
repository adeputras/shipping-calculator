import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { DayPicker } from 'react-day-picker';
import { format, addBusinessDays, eachDayOfInterval } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './index.scss';

const dataCountries = {
  indonesia: [
    {
      date: '01/01/2023',
      description: 'weekends',
    },
    {
      date: '01/07/2023',
      description: 'weekends',
    },
    {
      date: '01/08/2023',
      description: 'weekends',
    },
    {
      date: '01/14/2023',
      description: 'weekends',
    },
    {
      date: '01/15/2023',
      description: 'weekends',
    },
    {
      date: '01/21/2023',
      description: 'weekends',
    },
    {
      date: '01/22/2023',
      description: 'weekends',
    },
    {
      date: '01/28/2023',
      description: 'weekends',
    },
    {
      date: '01/29/2023',
      description: 'weekends',
    },
    {
      date: '02/04/2023',
      description: 'weekends',
    },
    {
      date: '02/05/2023',
      description: 'weekends',
    },
    {
      date: '02/11/2023',
      description: 'weekends',
    },
    {
      date: '02/12/2023',
      description: 'weekends',
    },
    {
      date: '02/18/2023',
      description: 'weekends',
    },
    {
      date: '02/19/2023',
      description: 'weekends',
    },
    {
      date: '02/25/2023',
      description: 'weekends',
    },
    {
      date: '02/26/2023',
      description: 'weekends',
    },
    {
      date: '03/04/2023',
      description: 'weekends',
    },
    {
      date: '03/05/2023',
      description: 'weekends',
    },
    {
      date: '03/11/2023',
      description: 'weekends',
    },
    {
      date: '03/12/2023',
      description: 'weekends',
    },
    {
      date: '03/18/2023',
      description: 'weekends',
    },
    {
      date: '03/19/2023',
      description: 'weekends',
    },
    {
      date: '03/22/2023',
      description: 'Hari Suci Nyepi',
    },
    {
      date: '03/25/2023',
      description: 'weekends',
    },
    {
      date: '03/26/2023',
      description: 'weekends',
    },
    {
      date: '04/01/2023',
      description: 'weekends',
    },
    {
      date: '04/02/2023',
      description: 'weekends',
    },
    {
      date: '04/07/2023',
      description: 'Jumat Agung',
    },
    {
      date: '04/08/2023',
      description: 'weekends',
    },
    {
      date: '04/09/2023',
      description: 'weekends',
    },
    {
      date: '04/15/2023',
      description: 'weekends',
    },
    {
      date: '04/16/2023',
      description: 'weekends',
    },
    {
      date: '04/22/2023',
      description: 'weekends',
    },
    {
      date: '04/23/2023',
      description: 'weekends',
    },
    {
      date: '04/29/2023',
      description: 'weekends',
    },
    {
      date: '04/30/2023',
      description: 'weekends',
    },
  ],
  malaysia: [
    {
      date: '01/01/2023',
      description: 'weekends',
    },
    {
      date: '01/02/2023',
      description: 'New Year Holiday',
    },
    {
      date: '01/07/2023',
      description: 'weekends',
    },
    {
      date: '01/08/2023',
      description: 'weekends',
    },
    {
      date: '01/14/2023',
      description: 'weekends',
    },
    {
      date: '01/15/2023',
      description: 'weekends',
    },
    {
      date: '01/21/2023',
      description: 'weekends',
    },
    {
      date: '01/22/2023',
      description: 'weekends',
    },
    {
      date: '01/23/2023',
      description: 'Chinese New Year Holiday',
    },
    {
      date: '01/24/2023',
      description: 'Chinese New Year Holiday',
    },
    {
      date: '01/28/2023',
      description: 'weekends',
    },
    {
      date: '01/29/2023',
      description: 'weekends',
    },
    {
      date: '02/04/2023',
      description: 'weekends',
    },
    {
      date: '02/05/2023',
      description: 'weekends',
    },
    {
      date: '02/11/2023',
      description: 'weekends',
    },
    {
      date: '02/12/2023',
      description: 'weekends',
    },
    {
      date: '02/18/2023',
      description: 'weekends',
    },
    {
      date: '02/19/2023',
      description: 'weekends',
    },
    {
      date: '02/25/2023',
      description: 'weekends',
    },
    {
      date: '02/26/2023',
      description: 'weekends',
    },
    {
      date: '03/04/2023',
      description: 'weekends',
    },
    {
      date: '03/05/2023',
      description: 'weekends',
    },
    {
      date: '03/11/2023',
      description: 'weekends',
    },
    {
      date: '03/12/2023',
      description: 'weekends',
    },
    {
      date: '03/18/2023',
      description: 'weekends',
    },
    {
      date: '03/19/2023',
      description: 'weekends',
    },
    {
      date: '03/25/2023',
      description: 'weekends',
    },
    {
      date: '03/26/2023',
      description: 'weekends',
    },
    {
      date: '04/01/2023',
      description: 'weekends',
    },
    {
      date: '04/02/2023',
      description: 'weekends',
    },
    {
      date: '04/08/2023',
      description: 'weekends',
    },
    {
      date: '04/09/2023',
      description: 'weekends',
    },
    {
      date: '04/15/2023',
      description: 'weekends',
    },
    {
      date: '04/16/2023',
      description: 'weekends',
    },
    {
      date: '04/22/2023',
      description: 'weekends',
    },
    {
      date: '04/23/2023',
      description: 'weekends',
    },
    {
      date: '04/29/2023',
      description: 'weekends',
    },
    {
      date: '04/30/2023',
      description: 'weekends',
    },
  ],
  philippine: [
    {
      date: '01/01/2023',
      description: 'weekends',
    },
    {
      date: '01/07/2023',
      description: 'weekends',
    },
    {
      date: '01/08/2023',
      description: 'weekends',
    },
    {
      date: '01/14/2023',
      description: 'weekends',
    },
    {
      date: '01/15/2023',
      description: 'weekends',
    },
    {
      date: '01/21/2023',
      description: 'weekends',
    },
    {
      date: '01/22/2023',
      description: 'weekends',
    },
    {
      date: '01/28/2023',
      description: 'weekends',
    },
    {
      date: '01/29/2023',
      description: 'weekends',
    },
    {
      date: '02/04/2023',
      description: 'weekends',
    },
    {
      date: '02/05/2023',
      description: 'weekends',
    },
    {
      date: '02/11/2023',
      description: 'weekends',
    },
    {
      date: '02/12/2023',
      description: 'weekends',
    },
    {
      date: '02/18/2023',
      description: 'weekends',
    },
    {
      date: '02/19/2023',
      description: 'weekends',
    },
    {
      date: '02/25/2023',
      description: 'weekends',
    },
    {
      date: '02/26/2023',
      description: 'weekends',
    },
    {
      date: '03/04/2023',
      description: 'weekends',
    },
    {
      date: '03/05/2023',
      description: 'weekends',
    },
    {
      date: '03/11/2023',
      description: 'weekends',
    },
    {
      date: '03/12/2023',
      description: 'weekends',
    },
    {
      date: '03/18/2023',
      description: 'weekends',
    },
    {
      date: '03/19/2023',
      description: 'weekends',
    },
    {
      date: '03/25/2023',
      description: 'weekends',
    },
    {
      date: '03/26/2023',
      description: 'weekends',
    },
    {
      date: '04/01/2023',
      description: 'weekends',
    },
    {
      date: '04/02/2023',
      description: 'weekends',
    },
    {
      date: '04/07/2023',
      description: 'Good Friday',
    },
    {
      date: '04/08/2023',
      description: 'weekends',
    },
    {
      date: '04/09/2023',
      description: 'weekends',
    },
    {
      date: '04/15/2023',
      description: 'weekends',
    },
    {
      date: '04/16/2023',
      description: 'weekends',
    },
    {
      date: '04/22/2023',
      description: 'weekends',
    },
    {
      date: '04/23/2023',
      description: 'weekends',
    },
    {
      date: '04/29/2023',
      description: 'weekends',
    },
    {
      date: '04/30/2023',
      description: 'weekends',
    },
  ],
  singapore: [
    {
      date: '01/01/2023',
      description: 'weekends',
    },
    {
      date: '01/02/2023',
      description: 'New Year Holiday',
    },
    {
      date: '01/07/2023',
      description: 'weekends',
    },
    {
      date: '01/08/2023',
      description: 'weekends',
    },
    {
      date: '01/14/2023',
      description: 'weekends',
    },
    {
      date: '01/15/2023',
      description: 'weekends',
    },
    {
      date: '01/21/2023',
      description: 'weekends',
    },
    {
      date: '01/22/2023',
      description: 'weekends',
    },
    {
      date: '01/23/2023',
      description: 'Chinese New Year Holiday',
    },
    {
      date: '01/24/2023',
      description: 'Chinese New Year Holiday',
    },
    {
      date: '01/28/2023',
      description: 'weekends',
    },
    {
      date: '01/29/2023',
      description: 'weekends',
    },
    {
      date: '02/04/2023',
      description: 'weekends',
    },
    {
      date: '02/05/2023',
      description: 'weekends',
    },
    {
      date: '02/11/2023',
      description: 'weekends',
    },
    {
      date: '02/12/2023',
      description: 'weekends',
    },
    {
      date: '02/18/2023',
      description: 'weekends',
    },
    {
      date: '02/19/2023',
      description: 'weekends',
    },
    {
      date: '02/25/2023',
      description: 'weekends',
    },
    {
      date: '02/26/2023',
      description: 'weekends',
    },
    {
      date: '03/04/2023',
      description: 'weekends',
    },
    {
      date: '03/05/2023',
      description: 'weekends',
    },
    {
      date: '03/11/2023',
      description: 'weekends',
    },
    {
      date: '03/12/2023',
      description: 'weekends',
    },
    {
      date: '03/18/2023',
      description: 'weekends',
    },
    {
      date: '03/19/2023',
      description: 'weekends',
    },
    {
      date: '03/25/2023',
      description: 'weekends',
    },
    {
      date: '03/26/2023',
      description: 'weekends',
    },
    {
      date: '04/01/2023',
      description: 'weekends',
    },
    {
      date: '04/02/2023',
      description: 'weekends',
    },
    {
      date: '04/07/2023',
      description: 'Good Friday',
    },
    {
      date: '04/08/2023',
      description: 'weekends',
    },
    {
      date: '04/09/2023',
      description: 'weekends',
    },
    {
      date: '04/15/2023',
      description: 'weekends',
    },
    {
      date: '04/16/2023',
      description: 'weekends',
    },
    {
      date: '04/22/2023',
      description: 'weekends',
    },
    {
      date: '04/23/2023',
      description: 'weekends',
    },
    {
      date: '04/29/2023',
      description: 'weekends',
    },
    {
      date: '04/30/2023',
      description: 'weekends',
    },
  ],
};

const Form = () => {
  const [country, setCountry] = useState({ value: 'malaysia', label: 'Malaysia' });
  const [estimation, setEstimation] = useState({ value: '3', label: 'Packing due date (normal)' });
  const [date, setDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryDateResult, setDeliveryDateResult] = useState();
  const [holidayResult, setHolidayResult] = useState([]);

  const highlightIndonesia = dataCountries.indonesia.map((data) => new Date(data.date));
  const highlightMalaysia = dataCountries.malaysia.map((data) => new Date(data.date));
  const highlightPhilippine = dataCountries.philippine.map((data) => new Date(data.date));
  const highlightSingapore = dataCountries.singapore.map((data) => new Date(data.date));

  // const getEstimation = (propsDate, propsEstimation, propsCountry) => {
  //   const estimateBusinessDays = eachDayOfInterval({
  //     start: new Date(propsDate),
  //     end: addBusinessDays(new Date(propsDate), propsEstimation)
  //   })

  //   const compareDataArray = (propsData) => {
  //     return propsData.map((data) => {
  //       switch (propsCountry) {
  //         case 'philippine':
  //           return dataCountries.philippine.filter((item) => item.date === data).flatMap((item) => item)
  //         case 'singapore':
  //           return dataCountries.singapore.filter((item) => item.date === data).flatMap((item) => item)
  //         default:
  //           return dataCountries.malaysia.filter((item) => item.date === data).flatMap((item) => item)
  //       }
  //     })
  //   }

  //   const estimateBusinessDaysFormated = estimateBusinessDays.map((data) => format(new Date(data), 'MM/dd/yyyy'))

  //   // const compareArray = estimateBusinessDaysFormated.map((data) => {
  //   //   switch (propsCountry) {
  //   //     case 'philippine':
  //   //       return dataCountries.philippine.filter((item) => item.date === data).flatMap((item) => item)
  //   //     case 'singapore':
  //   //       return dataCountries.singapore.filter((item) => item.date === data).flatMap((item) => item)
  //   //     default:
  //   //       return dataCountries.malaysia.filter((item) => item.date === data).flatMap((item) => item)
  //   //   }
  //   // })

  //   const compareArray = compareDataArray(estimateBusinessDaysFormated)
  //   const compareArrayResults = compareArray.flatMap((item) => item)
  //   const holidayLength = compareArrayResults.filter((item) => !item.description.includes('weekends'))
  //   const resultEstimateBusinessDays = addBusinessDays(new Date(estimateBusinessDays[estimateBusinessDays.length - 1]), holidayLength.length)

  //   // Recheck result
  //   const resultEstimateBusinessDaysArray = [format(new Date(resultEstimateBusinessDays), 'MM/dd/yyyy')]
  //   // const compareResultEstimateBusinessDays = resultEstimateBusinessDaysArray.map((data) => {
  //   //   switch (propsCountry) {
  //   //     case 'philippine':
  //   //       return dataCountries.philippine.filter((item) => item.date === data).flatMap((item) => item)
  //   //     case 'singapore':
  //   //       return dataCountries.singapore.filter((item) => item.date === data).flatMap((item) => item)
  //   //     default:
  //   //       return dataCountries.malaysia.filter((item) => item.date === data).flatMap((item) => item)
  //   //   }
  //   // })

  //   const compareResultEstimateBusinessDays = compareDataArray(resultEstimateBusinessDaysArray)
  //   const recompareArrayResults = compareResultEstimateBusinessDays.flatMap((item) => item)
  //   const recheckHolidayLength = recompareArrayResults.filter((item) => !item.description.includes('weekends'))
  //   const recheckResultEstimateBusinessDays = addBusinessDays(new Date(resultEstimateBusinessDaysArray[resultEstimateBusinessDaysArray.length - 1]), recheckHolidayLength.length)

  //   setDeliveryDate(recheckResultEstimateBusinessDays)
  // }
  const getEstimation = (propsDate, propsEstimation, propsCountry) => {
    const calculateEstimateBusinessDays = (propsDate, propsEstimation) => {
      const estimateBusinessDays = eachDayOfInterval({
        start: new Date(propsDate),
        end: addBusinessDays(new Date(propsDate), propsEstimation),
      });
      return estimateBusinessDays.map((data) => format(new Date(data), 'MM/dd/yyyy'));
    };

    const compareDataArray = (propsData, propsCountry, propsEstimation) => {
      if (propsEstimation !== '10') {
        return propsData.map((data) => dataCountries.indonesia.filter((item) => item.date === data).flatMap((item) => item));
      } else {
        return propsData.map((data) => {
          switch (propsCountry) {
            case 'philippine':
              return dataCountries.philippine.filter((item) => item.date === data).flatMap((item) => item);
            case 'singapore':
              return dataCountries.singapore.filter((item) => item.date === data).flatMap((item) => item);
            default:
              return dataCountries.malaysia.filter((item) => item.date === data).flatMap((item) => item);
          }
        });
      }
    };

    const estimateBusinessDaysFormated = calculateEstimateBusinessDays(propsDate, propsEstimation);
    const compareArrayResults = compareDataArray(estimateBusinessDaysFormated, propsCountry, propsEstimation).flatMap((item) => item);
    const holidayLength = compareArrayResults.filter((item) => !item.description.includes('weekends'));
    const resultEstimateBusinessDays = addBusinessDays(
      new Date(calculateEstimateBusinessDays(propsDate, propsEstimation)[calculateEstimateBusinessDays(propsDate, propsEstimation).length - 1]),
      holidayLength.length
    );
    const resultEstimateBusinessDaysArray = [format(new Date(resultEstimateBusinessDays), 'MM/dd/yyyy')];
    const compareResultEstimateBusinessDays = compareDataArray(resultEstimateBusinessDaysArray, propsCountry, propsEstimation).flatMap((item) => item);
    const recheckHolidayLength = compareResultEstimateBusinessDays.filter((item) => !item.description.includes('weekends'));
    const recheckResultEstimateBusinessDays = addBusinessDays(new Date(resultEstimateBusinessDaysArray[resultEstimateBusinessDaysArray.length - 1]), recheckHolidayLength.length);

    const combineHolidayResult = [...holidayLength, ...recheckHolidayLength];
    setHolidayResult(combineHolidayResult);
    setDeliveryDate(recheckResultEstimateBusinessDays);
    setDeliveryDateResult(recheckResultEstimateBusinessDays);
  };

  useEffect(() => {
    if (date !== null) {
      getEstimation(date, estimation.value, country.value);
    }
  }, [date, estimation, country]);

  const showWeekendHoliday = (propsCountry, propsEstimated) => {
    if (propsEstimated !== '10') {
      return highlightIndonesia;
    } else {
      return propsCountry === 'philippine' ? highlightPhilippine : propsCountry === 'singapore' ? highlightSingapore : highlightMalaysia;
    }
  };
  return (
    <div className="form-input">
      <div className="form">
        <div className="form-group">
          <label htmlFor="">Country</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="country"
            onChange={(data) => {
              setCountry(data);
            }}
            options={[
              { value: 'malaysia', label: 'Malaysia' },
              { value: 'philippine', label: 'Philippine' },
              { value: 'singapore', label: 'Singapore' },
            ]}
            defaultValue={country}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Type</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="estimate"
            onChange={(data) => setEstimation(data)}
            options={[
              { value: '3', label: 'Packing due date (normal)' },
              { value: '7', label: 'Packing due date (PO 7 Hari kerja)' },
              { value: '10', label: 'Shipping ETA' },
            ]}
            defaultValue={estimation}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Select Date</label>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(data) => {
              if (data !== undefined) {
                setDate(data);
              } else {
                setDate(null);
                setDeliveryDate(new Date());
              }
            }}
            // disabled={highlightIndonesia}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Max Estimated</label>
          <DayPicker
            className="delivery-date"
            mode="single"
            selected={deliveryDate}
            month={deliveryDate}
            disabled={showWeekendHoliday(country.value, estimation.value)}
            // disabled={country.value === 'philippine' ? highlightPhilippine : country.value === 'singapore' ? highlightSingapore : highlightMalaysia}
          />
        </div>
      </div>
      <div className="result">
        {holidayResult.map((data, index) => {
          return (
            <p key={index}>
              {format(new Date(data.date), 'dd MMMM yyyy')} is {data.description}
            </p>
          );
        })}

        {deliveryDateResult ? (
          <h3>
            Your Estimated Day is: <br className="visible-xs" /> {format(new Date(deliveryDateResult), 'dd MMMM yyyy')}
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
