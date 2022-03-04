import { TestimonialCard } from "./testimonials/testimonialcards";

export const Testimonials = () => {
  return (
    <div className="px-4 flex flex-col my-2 max-w-[1200px] mx-auto">
      <h3 className="bg-black text-white text-2xl pl-8 -translate-x-4 cutOff:translate-x-0 py-1 font-bold w-[14.5ch] pr-4">
        Testimonials
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-2 smsm:grid-cols-1 max-w-[1200px] mx-auto gap-4 mt-12">
        <TestimonialCard
          name="Lauren Snape"
          body="Had one of the best experiences with JUST Aesthetics everything from service to aftercare was perfect 10. Claire is an absolute master at what she does, and I highly recommend her if you want a safe, clinically, clean and well priced treatment without product compromise."
        />

        <TestimonialCard
          name="Emma Otter"
          body="What a treat to experience, the new treatment at Just Aesthetics - 𝐂𝐫𝐲𝐬𝐭𝐚𝐥 𝐂𝐚𝐫𝐛𝐨𝐱𝐲 𝐂𝐎𝟐 𝐅𝐚𝐜𝐢𝐚𝐥. Claire went through the whole process with me so that I knew what to expect and how my face would feel during the treatment. I opted for a dermaplaning treatment at the same time which complements this facial really well. We are four weeks along now and my face still looks fresh, plumped and healthy. Highly recommend this treatment and Claire."
        />

        <TestimonialCard
          name="Moira Grobicki"
          body="Claire is an excellent aesthetic Nurse, she is so kind and understanding, she goes out of her way to help you, especially if you are needing extra support. I highly recommend seeing Claire, who will always give you the very best care."
        />

        <TestimonialCard
          name="Laura Nolan"
          body="Had my first ever Derma peel today and it was fantastic! Lovely treat which I won in the Just Aesthetic competition. I feel rejuvenated! Claire is very informative about her treatments and talks through everything with you before proceeding. She also puts you at ease during the treatment. The little aftercare package is also a lovely idea. Thanks Claire x"
        />

        <TestimonialCard
          name="Vicki Hock"
          body="Had a Dermapeel with Claire. She made to feel very relaxed, the procedure was clearly explained beforehand so I knew what to expect. She also took time to understand my skin and gave great advice on what to do with my skin going forward. My skin looks and feels much clearer and fresher. Can’t wait to book in for my next one. Thanks Claire x"
        />

        <TestimonialCard
          name="Michael Nolan"
          body="My wife had a derma peel back in February and was really pleased. Since then and after advice from Claire she has now started to use the Cosmed products. I'm sure she'll be returning."
        />

        <TestimonialCard
          name="Amanda Quirk"
          body="I have had my third facial peel this evening and my skin feels and looks amazing! Claire is a very experience qualified nurse which I feel to be of the upmost importance to deliver this treatment. Very professional. I have been guided through step by step of what differing types of peels will be of most benefit for my skin at each stage. I can't recommend Claire highly enough."
        />

        <TestimonialCard
          name="Danielle Smith LUaesthetics"
          body="I would 100% Recommend Claire. I had my lips and cheeks done by Claire wanting a more plumpy look to my lips and a suttle enhancement to my cheeks. Claire was very professional, informative and thorough throughout. Claire took the time to understand the look that I wanted to achieve and made me feel at ease during the treatments. Claire was very knowledgeable about her treatments and ensured that I had full understanding of the treatments, products and any side effects. I love my results and feel so much more confident now! Also after treatments Claire gave me a little goody bag (which I loved) with products in which we’re lovely 😊 Thanks a lot Claire 🥰 I will definitely be returning! Xx"
        />

        <TestimonialCard
          name="Cathryn Blackburn"
          body="Had a Dermapeel with Claire. Was made to feel very relaxed, the procedure was clearly explained beforehand so I knew what to expect. Skin looks much clearer and fresher. Will definitely return! Thanks Claire."
        />
      </div>
    </div>
  );
};
