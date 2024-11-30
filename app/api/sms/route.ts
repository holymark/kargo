import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import AfricasTalking from 'africastalking';

type ResponseData = {
  message: string
}

export const GET = async (res: NextApiResponse) => {
  const at = AfricasTalking({
    apiKey: "atsk_5412ba4d79c8b5aa4e319ef7a470c517e28f50f0a255f372324f68a2518e5acb1c124efb",
    username: "sandbox"
  })

  try {
    const result = await at.SMS.send({
      to: "+2347056715182",
      message: "Ninja boy holy",
      from: "Hech Mark"
    })
    console.log(result)
    return NextResponse.json({ success: true, 1: "success sending sms" });
  } catch (e) {
    console.error(e)
    return NextResponse.json({ success: true, 1: "error sending sms" });
  }
}