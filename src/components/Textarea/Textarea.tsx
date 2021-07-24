import classNames from 'classnames'

type Props = {
  placeholder: string
}

const Textarea = ({ placeholder }: Props) => (
  <textarea
    className={classNames('w-full')}
    placeholder={placeholder}
  />
)

export default Textarea
