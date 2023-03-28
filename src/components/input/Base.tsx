import { Poppins } from 'next/font/google';
import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Base.module.scss'
import textareaStyles from './TextArea.module.scss'

type InputBaseProps = {
  error?: boolean,
}

type TextInputEntry = InputBaseProps & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof InputBaseProps> & {
  entryType: 'text' | 'email'
}

type TextAreaInputEntry = InputBaseProps & Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, keyof InputBaseProps> & {
  entryType: 'textarea'
}

type BaseInputProps = TextInputEntry | TextAreaInputEntry

const poppins = Poppins({
  weight: '300',
})

export default function BaseInput(props: BaseInputProps) {
  if (props.entryType == null) return null

  if (props.entryType == 'textarea') {
    const { className, error, entryType: _, ...rest } = props

    return <textarea
      rows={5}
      className={classNames(
        poppins.className,
        styles.input,
        textareaStyles.input,
        className,
        {
          [styles.error]: error
        })
      }
      {...rest}
    />
  }

  const {
    error,
    className,
    entryType: _,
    ...rest
  } = props

  return <input
    className={classNames(
      className,
      poppins.className,
      styles.input,
      {
        [styles.error]: error
      })
    }
    {...rest}
  />
}
