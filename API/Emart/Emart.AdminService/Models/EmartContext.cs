using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.AdminService.Models
{
    public partial class EmartContext : DbContext
    {
        public EmartContext()
        {
        }

        public EmartContext(DbContextOptions<EmartContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-Q6LB46O\\SQLEXPRESS;Initial Catalog=Emart;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Buyer__AB6E61643CA41306")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("UQ__Buyer__536C85E47BC84CE8")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedDateTime).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.CartId).ValueGeneratedNever();

                entity.Property(e => e.BuyerId).HasColumnName("Buyer_id");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDesp)
                    .IsRequired()
                    .HasColumnName("itemDesp")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ItemId).HasColumnName("Item_id");

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("itemName")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__Cart__Item_id__628FA481");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PK__Category__26E8B418D439B90A");

                entity.HasIndex(e => e.CatName)
                    .HasName("UQ__Category__B46D3EC3B8C67937")
                    .IsUnique();

                entity.Property(e => e.CatId)
                    .HasColumnName("Cat_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("Brief_details")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.CatName)
                    .IsRequired()
                    .HasColumnName("Cat_Name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__Items__3FB403AC4389047A");

                entity.Property(e => e.ItemId)
                    .HasColumnName("Item_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CatId).HasColumnName("Cat_id");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDesp)
                    .HasColumnName("Item_desp")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("Item_name")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("Seller_id");

                entity.Property(e => e.StockNo).HasColumnName("Stock_no");

                entity.Property(e => e.SubCId).HasColumnName("SubC_id");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK__Items__Cat_id__49C3F6B7");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__Items__Seller_id__4BAC3F29");

                entity.HasOne(d => d.SubC)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubCId)
                    .HasConstraintName("FK__Items__SubC_id__4AB81AF0");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.BuyerId).HasColumnName("Buyer_id");

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime");

                entity.Property(e => e.ItemId).HasColumnName("Item_id");

                entity.Property(e => e.NoOfItems).HasColumnName("No_ofItems");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("Seller_id");

                entity.Property(e => e.TransType)
                    .IsRequired()
                    .HasColumnName("Trans_Type")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__PurchaseH__Buyer__4E88ABD4");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__PurchaseH__Item___5070F446");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__PurchaseH__Selle__4F7CD00D");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Seller__AB6E6164A39C2AE8")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("UQ__Seller__536C85E4E1C29E48")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Abtcompany)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.CompWebsite)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Contact)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.SubCId)
                    .HasName("PK__SubCateg__4692B2F6704FF68F");

                entity.HasIndex(e => e.SubCName)
                    .HasName("UQ__SubCateg__96656CEBB3CC9060")
                    .IsUnique();

                entity.Property(e => e.SubCId)
                    .HasColumnName("SubC_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefSubCdetails)
                    .HasColumnName("Brief_SubCDetails")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.CatId).HasColumnName("Cat_id");

                entity.Property(e => e.SubCName)
                    .IsRequired()
                    .HasColumnName("SubC_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK__SubCatego__Cat_i__1BFD2C07");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
