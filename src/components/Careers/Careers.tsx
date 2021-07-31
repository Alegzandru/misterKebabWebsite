import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import careersHero from '../../../public/images/careers-hero.png'
import { CAREERS_CHECKBOXES_CATEGORY, CAREERS_OTHERS, CAREERS_SERVICES } from '../../constants'
import { VALIDATIONS } from '../../constants/forms'
import { CareerCheckboxesCategory, CareerOthersBlock } from '../../types'
import { careerFormDataHandler } from '../../utils/forms'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import styles from './Careers.module.scss'
import CareersCategoryBlock from './CareersCategoryBlock/CareersCategoryBlock'

const Careers = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [checkboxesErrors, setCheckboxesErrors] = useState(new Set<CareerCheckboxesCategory>())

  const { t } = useTranslation('careers')

  const onSubmit = (data: Record<string, string | boolean>) => {
    const newData = careerFormDataHandler(data)

    const checkboxCategories = Object.keys(CAREERS_CHECKBOXES_CATEGORY) as CareerCheckboxesCategory[]
    const newCheckboxesErrors = new Set<CareerCheckboxesCategory>(checkboxCategories)

    checkboxCategories.forEach((category) => {
      if (newData[category].length) {
        newCheckboxesErrors.delete(category)
      }
    })

    if (newCheckboxesErrors.size) {
      return setCheckboxesErrors(new Set(newCheckboxesErrors))
    }

    // eslint-disable-next-line no-console
    console.table(newData)
  }

  const checkboxHandler = (value: CareerCheckboxesCategory) => {
    if (checkboxesErrors.has(value)) {
      checkboxesErrors.delete(value)

      setCheckboxesErrors(new Set(checkboxesErrors))
    }
  }

  const errorBlock = (category: CareerCheckboxesCategory) => checkboxesErrors.has(category)
    && <p className={styles.careersHeroContainer__error}>{t('*Bifați cel puțin o opțiune!')}</p>

  const othersBlock = ({ heading, values, name }: CareerOthersBlock, count: number) => (
    <div key={count} className={classNames(styles.careersHeroContainer__others, 'mb-14')}>
      <h3 className={classNames(styles.careersHeroContainer__othersHeading, 'font-bold mb-4')}>{t(heading)}:</h3>
      {values.map((value, index) => (
        <Checkbox
          key={index}
          className={classNames(styles.careersHeroContainer__checkbox)}
          name={value}
          register={register}
          onChange={() => checkboxHandler(name as CareerCheckboxesCategory)}
        >
          {value}
        </Checkbox>
      ))}
      {errorBlock(name as CareerCheckboxesCategory)}
    </div>
  )

  const verticalLine = (
    <div className="flex justify-center">
      <div className={classNames(styles.careersHeroContainer__verticalLine, 'h-19 sm:h-26')} />
    </div>
  )

  return (
    <div className={classNames(styles.careersHeroContainer, 'w-full pb-19')}>
      <div className="h-16 md:h-26" />
      <div className={classNames(styles.careersHeroContainer__hero, 'w-full relative flex justify-center items-center')}>
        <Image src={careersHero} alt="Hero" layout="fill" objectFit="cover" />
        <h1 className={classNames(styles.careersHeroContainer__heading, 'absolute z-10 font-bold')}>{t('Cariere')}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CareersCategoryBlock heading="Date de contact">
          <div className="mt-6 grid sm:grid-cols-2 gap-x-6">
            <Input
              className="mb-4"
              name="name"
              label="Nume Prenume"
              placeholder="Numele dvs."
              register={register}
              errors={errors}
              {...VALIDATIONS.name}
            />
            <Input
              className="mb-6"
              type="number"
              name="age"
              label="Varsta"
              placeholder="18+"
              register={register}
              errors={errors}
              {...VALIDATIONS.age}
            />
            <Input
              className="mb-4"
              name="tel"
              label="Numar de telefon"
              placeholder="+373 (__) ___ ___"
              register={register}
              errors={errors}
              {...VALIDATIONS.tel}
            />
            <Input
              name="email"
              label="E-mail"
              placeholder="exemplu@mail.com"
              register={register}
              errors={errors}
              {...VALIDATIONS.email}
            />
          </div>
        </CareersCategoryBlock>
        {verticalLine}
        <CareersCategoryBlock heading="Serviciu">
          <div className="mt-8 grid sm:grid-cols-2">
            {CAREERS_SERVICES.map((service, index) => (
              <Checkbox
                key={index}
                className={classNames(styles.careersHeroContainer__checkbox, 'mb-6 md:mb-4')}
                name={service}
                register={register}
                onChange={() => checkboxHandler(CAREERS_CHECKBOXES_CATEGORY.services)}
              >
                {service}
              </Checkbox>
            ))}
            {errorBlock(CAREERS_CHECKBOXES_CATEGORY.services)}
          </div>
        </CareersCategoryBlock>
        {verticalLine}
        <CareersCategoryBlock>
          <div className="grid sm:grid-cols-3">
            {CAREERS_OTHERS.map(othersBlock)}
          </div>
        </CareersCategoryBlock>
        <div className="px-5">
          <Button className={classNames(styles.careersHeroContainer__button, 'mt-24 mx-auto sm:mt-18')} type="submit">
            {t('Trimite')}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Careers
