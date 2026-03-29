import { supabaseAdmin } from '@/lib/supabase';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  await supabaseAdmin
    .from('orders')
    .update({ 
      status: 'shipped', 
      tracking_url: body.tracking_url,
      supplier_order_id: body.id 
    })
    .eq('id', body.metadata.order_id);

  // Auto 10% affiliate
  if (body.metadata.affiliate_code) {
    await supabaseAdmin.rpc('process_affiliate_commission', {
      p_code: body.metadata.affiliate_code,
      p_amount: body.total * 0.10
    });
  }
  return Response.json({ received: true });
}
