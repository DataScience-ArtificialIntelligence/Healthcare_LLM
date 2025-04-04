import { Request, Response, NextFunction, text } from 'express'
import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.use(async (req: Request, res: Response, next: NextFunction) => {
    try {        
		const modelResponse = await axios.post(
			'http://10.0.12.87:8000/ask', {
				text: req.body.prompt,
				max_length: 200
			}
		)

        res.status(200).json({
            response: modelResponse.data.output
        })
    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            msg: 'Response generation failed!',
        })
    }
})

export default router
