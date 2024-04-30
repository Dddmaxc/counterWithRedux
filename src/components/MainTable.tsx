import { Button } from '@mui/material'
import s from './MainTable.module.css'
import { Opacity } from '@mui/icons-material'

type PropsType = {
	count: number
	plus: () => void
	minus: () => void
	clean: () => void
}

export const MainTable = (props: PropsType) => {
	return (
		<>
			<div className={s.container}>
				<div className={s.counter}>{props.count}</div>
				<div className={s.container_btn}>
					<Button
						sx={{ opacity: 0.8 }}
						variant='contained'
						color='success'
						onClick={props.plus}
					>
						+
					</Button>
					<Button
						sx={{ opacity: 0.8 }}
						variant='contained'
						color='error'
						onClick={props.clean}
					>
						x
					</Button>
					<Button
						sx={{ opacity: 0.8 }}
						variant='contained'
						color='info'
						onClick={props.minus}
					>
						-
					</Button>
				</div>
			</div>
		</>
	)
}
