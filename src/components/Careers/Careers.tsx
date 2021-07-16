import classNames from 'classnames'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import careersHero from '../../../public/images/careers-hero.png'
import { CAREERS_OTHERS, CAREERS_SERVICES } from '../../constants'
import { CareerOthersBlock } from '../../types'
import { careerFormDataHandler } from '../../utils/forms'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import styles from './Careers.module.scss'
import CareersCategoryBlock from './CareersCategoryBlock/CareersCategoryBlock'

const Careers = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  // eslint-disable-next-line no-console
  const onSubmit = (data: Record<string, string | boolean>) => {
    const newData = careerFormDataHandler(data)

    // eslint-disable-next-line no-console
    console.table(newData)
  }

  const othersBlock = ({ heading, values }: CareerOthersBlock, count: number) => (
    <div key={count} className={classNames(styles.careersHeroContainer__others, 'mb-14')}>
      <h3 className={classNames(styles.careersHeroContainer__othersHeading, 'font-bold mb-4')}>{heading}:</h3>
      {values.map((value, index) => (
        <Checkbox
          key={index}
          className={classNames(
            styles.careersHeroContainer__checkbox,
            styles.careersHeroContainer__checkbox_margin,
          )}
          name={value}
          register={register}
        >
          {value}
        </Checkbox>
      ))}
    </div>
  )

  return (
    <div className={classNames(styles.careersHeroContainer, 'w-full')}>
      <div className="h-16 md:h-26" />
      <div className={classNames(styles.careersHeroContainer__hero, 'w-full relative flex justify-center items-center')}>
        <Image src={careersHero} alt="Hero" layout="fill" objectFit="cover" />
        <h1 className={classNames(styles.careersHeroContainer__heading, 'absolute z-10 font-bold')}>Cariere</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CareersCategoryBlock heading="Date de contact">
          <div className="mt-6">
            <Input className="mb-4" name="name" label="Nume Prenume" placeholder="Numele dvs" register={register} />
            <Input className="mb-6" name="age" label="Varsta" placeholder="18+" register={register} />
            <Input className="mb-4" name="tel" label="Numar de telefon" placeholder="+373 (__) ___ ___" register={register} />
            <Input name="email" label="E-mail" placeholder="exemplu@mail.com" register={register} />
          </div>
        </CareersCategoryBlock>
        <CareersCategoryBlock heading="Serviciu">
          <div className="mt-8">
            {CAREERS_SERVICES.map((service, index) => (
              <Checkbox
                key={index}
                className={styles.careersHeroContainer__checkbox}
                name={service}
                register={register}
              >
                {service}
              </Checkbox>
            ))}
          </div>
        </CareersCategoryBlock>
        <CareersCategoryBlock>
          {CAREERS_OTHERS.map(othersBlock)}
        </CareersCategoryBlock>
        <div className="px-5">
          <Button className="mt-24 mb-19" type="submit">
            Trimite
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Careers
