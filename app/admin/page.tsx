'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Admin() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    supabase.from('products').select('*').then(({ data }) => setProducts(data || []));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-black mb-8">Admin • GrandsuperSlam</h1>
      <table className="w-full border border-amber-400">
        {/* Full CRUD table with shadcn – add buttons for fulfill, edit, delete */}
      </table>
    </div>
  );
}
