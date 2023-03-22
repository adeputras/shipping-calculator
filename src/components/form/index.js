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
  const [country, setCountry] = useState({
    value: 'malaysia',
    label: 'Malaysia',
  });
  const [estimation, setEstimation] = useState({
    value: '3',
    label: 'Packing due date (normal)',
  });
  const [date, setDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryDateResult, setDeliveryDateResult] = useState();
  const [holidayResult, setHolidayResult] = useState([]);

  const highlightIndonesia = dataCountries.indonesia.map(
    (data) => new Date(data.date)
  );
  const highlightMalaysia = dataCountries.malaysia.map(
    (data) => new Date(data.date)
  );
  const highlightPhilippine = dataCountries.philippine.map(
    (data) => new Date(data.date)
  );
  const highlightSingapore = dataCountries.singapore.map(
    (data) => new Date(data.date)
  );
  // The function takes in three parameters - propsDate, propsEstimation, and propsCountry
  const getEstimation = (propsDate, propsEstimation, propsCountry) => {
    // This function calculates the estimated delivery dates based on the input parameters
    const calculateEstimateBusinessDays = (propsDate, propsEstimation) => {
      // This calculates the interval between the start date (1 business day after the input date) and the end date (input date + input estimation in business days)
      const estimateBusinessDays = eachDayOfInterval({
        start: addBusinessDays(new Date(propsDate), 1),
        end: addBusinessDays(
          new Date(propsDate),
          parseInt(propsEstimation, 10)
        ),
      });
      // This maps the estimated delivery dates to a formatted date string (MM/dd/yyyy)
      return estimateBusinessDays.map((data) =>
        format(new Date(data), 'MM/dd/yyyy')
      );
    };

    // This function compares the data array with the data from the respective country to get the holiday dates
    const compareDataArray = (propsData, propsCountry, propsEstimation) => {
      // If the input estimation is not 10, only data from Indonesia is used
      if (propsEstimation !== '10') {
        return propsData.map((data) =>
          dataCountries.indonesia
            .filter((item) => item.date === data)
            .flatMap((item) => item)
        );
      } else {
        // If the input estimation is 10, data from the respective country is used
        return propsData.map((data) => {
          switch (propsCountry) {
            case 'philippine':
              return dataCountries.philippine
                .filter((item) => item.date === data)
                .flatMap((item) => item);
            case 'singapore':
              return dataCountries.singapore
                .filter((item) => item.date === data)
                .flatMap((item) => item);
            default:
              return dataCountries.malaysia
                .filter((item) => item.date === data)
                .flatMap((item) => item);
          }
        });
      }
    };
    // This variable stores the formatted estimated delivery dates
    const estimateBusinessDaysFormated = calculateEstimateBusinessDays(
      propsDate,
      propsEstimation
    );

    // This variable stores the holiday dates based on the estimated delivery dates
    const compareArrayResults = compareDataArray(
      estimateBusinessDaysFormated,
      propsCountry,
      propsEstimation
    ).flatMap((item) => item);
    // This variable stores the length of holidays
    const holidayLength = compareArrayResults.filter(
      (item) => !item.description.includes('weekends')
    );
    // This variable stores the actual delivery date, accounting for holidays
    const resultEstimateBusinessDays = addBusinessDays(
      new Date(
        calculateEstimateBusinessDays(propsDate, propsEstimation)[
          calculateEstimateBusinessDays(propsDate, propsEstimation).length - 1
        ]
      ),
      holidayLength.length
    );
    // This variable stores the formatted actual delivery date
    const resultEstimateBusinessDaysArray = [
      format(new Date(resultEstimateBusinessDays), 'MM/dd/yyyy'),
    ];
    // This variable stores the holiday dates based on the actual delivery date
    const compareResultEstimateBusinessDays = compareDataArray(
      resultEstimateBusinessDaysArray,
      propsCountry,
      propsEstimation
    ).flatMap((item) => item);
    const recheckHolidayLength = compareResultEstimateBusinessDays.filter(
      (item) => !item.description.includes('weekends')
    );

    // This variable calculates the actual delivery date accounting for the holidays
    const recheckResultEstimateBusinessDays = addBusinessDays(
      new Date(
        resultEstimateBusinessDaysArray[
          resultEstimateBusinessDaysArray.length - 1
        ]
      ),
      recheckHolidayLength.length
    );
    // This variable combines the holiday arrays for the estimated delivery date and the actual
    const combineHolidayResult = [...holidayLength, ...recheckHolidayLength];
    // These three functions update the state with the calculated delivery date, formatted delivery date, and list of holidays
    setHolidayResult(combineHolidayResult);
    setDeliveryDate(recheckResultEstimateBusinessDays);
    setDeliveryDateResult(recheckResultEstimateBusinessDays);

    // Overall, the `getEstimation` function takes in three parameters - `propsDate`, `propsEstimation`, and `propsCountry`. It then calculates the estimated delivery date based on the input parameters using the `calculateEstimateBusinessDays` function, which determines the interval between the start date (1 business day after the input date) and the end date (input date + input estimation in business days) and formats the delivery dates as strings.

    // The function then compares the estimated delivery dates with the respective country's holiday dates using the `compareDataArray` function. If the input estimation is not 10, only data from Indonesia is used, but if the input estimation is 10, data from the respective country is used. The `compareDataArray` function filters the holiday dates and maps them to an array of objects.

    // The function then calculates the length of holidays based on the estimated delivery date and the actual delivery date and updates the state with the calculated delivery date, formatted delivery date, and list of holidays using the `setDeliveryDate`, `setDeliveryDateResult`, and `setHolidayResult` functions.
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
      return propsCountry === 'philippine'
        ? highlightPhilippine
        : propsCountry === 'singapore'
        ? highlightSingapore
        : highlightMalaysia;
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
              {format(new Date(data.date), 'dd MMMM yyyy')} is{' '}
              {data.description}
            </p>
          );
        })}

        {deliveryDateResult ? (
          <h3>
            Your Estimated Day is: <br className="visible-xs" />{' '}
            {format(new Date(deliveryDateResult), 'dd MMMM yyyy')}
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
